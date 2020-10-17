/**
 * This file contains the backend Firebase Functions for the Transcrypt application.
 *
 * @author Jacob Ian Matthews
 * @date 13/10/20
 * @version 1.0
 */

import * as functions from 'firebase-functions';
import { context } from 'fetch-h2';
import { parseStringPromise } from 'xml2js';
import { decode } from 'urlencode';
import { URLSearchParams } from 'url'
import streamToPromise from 'stream-to-promise'

/**
 * Create a caption interface object
 */
interface Caption {
  baseUrl: string; // the URL to the caption
  lang: string; // the language code for the track
  kind: 'asr' | 'standard'; // whether or not the track is autogenerated
  name: string; // the English readable name of the caption track
}

/**
 * An interface for the possible translation languages.
 */
interface TLangs {
  lang: string; // the language code
  name: string; // the Simple English language name

}

/**
 * Create a response object for the CaptionsList
 */
interface CaptionsList {
  captions: Caption[];
  translation_langs: TLangs[];
}

// Create a fetch client
const { fetch } = context({
  httpProtocol: 'http2',
});

/**
 * Fetch the list of captions for a YouTube video.
 */
exports.getCaptionsList = functions.https.onCall(async (data) => {
  // Check for a videoID
  const videoId = data.videoId;
  if (!videoId) {
    // Throw an error
    throw new functions.https.HttpsError(
      'invalid-argument',
      'YouTube Video ID required.'
    );
  }

  // Call the Get Video Info endpoint from YouTube to get the caption tracks
  try {
    var res = await fetch(`https://www.youtube.com/get_video_info?video_id=${videoId}`);
  } catch (err) {
    // Return an internal error to the client
    throw new functions.https.HttpsError('internal', `Couldn't get the YouTube video info.`, err);
  }

  // Check the status of the response
  if(!res.ok) {
    // Throw an error depending on the status
    switch (res.status) {
      case 400: 
        throw new functions.https.HttpsError('invalid-argument', `A bad request was made to the YouTube API.`);
      case 403: 
        throw new functions.https.HttpsError('permission-denied', `Access to the YouTube API was denied.`)
      default:
        throw new functions.https.HttpsError('unknown','An error occurred.')
    }
  }

  // Get the readable stream and pipe it into a string
  var stream = await res.readable();

  // Get the buffer from the stream
  try {
    var buffer = await streamToPromise(stream);
  } catch {
    // Throw an error
    throw new functions.https.HttpsError('internal', 'An error occurred getting the YouTube video info.')
  }

  // Convert the buffer to a string to get the url encoded data
  var urlEncoded = buffer.toString();

  // URL decode the object
  const decoded = decode(urlEncoded);

  // Create a query string object so that the player_response can be extracted
  const query = new URLSearchParams(decoded);

  // Get the player_response object from the query string and parse it as JSON
  const playerResponse = query.get('player_response');

  // Check if there is a playerResponse object
  if(!playerResponse) {
    // Throw an error that the YouTube video doesn't exist
    throw new functions.https.HttpsError('not-found', `The YouTube video doesn't exist.`)
  }

  // Parse the player response object as JSON
  const jsonResponse = JSON.parse(playerResponse);

  // Get the captions object
  const captionsObj = jsonResponse.captions;

  // Check if the captions object exists
  if(!captionsObj) {
    // The video doesn't exist
    throw new functions.https.HttpsError('not-found', `The YouTube video doesn't exist.`)
  }

  // Get the captions Tracks object
  const captionsTracks = captionsObj.playerCaptionsTracklistRenderer.captionTracks;

  // Create an object to hold the list of captions
  var captions: Caption[] = [];

  // Check if there are any caption tracks
  if(captionsTracks.length !==0) {

    captionsTracks.forEach((track: any) => {
      // Create a caption option
      const caption: Caption = {
        lang: track.languageCode,
        baseUrl: track.baseUrl,
        name: track.name.simpleText,
        kind: track.kind === 'asr' ? 'asr' : 'standard' 
      }

      // Add the caption track to the list
      captions.push(caption)
    });
  }

  // Create an object to hold the list of translation languages
  var tLangs: TLangs[] = [];

  // Get the translation languages object
  const translationLangs = captionsObj.playerCaptionsTracklistRenderer.translationLanguages;

  // Check if there are any translation languages
  if(translationLangs.length !== 0){
    // Sort through all of the captions and create an object
    translationLangs.forEach((language:any) =>{
      // Create a tlang object
      const tlang: TLangs = {
        lang: language.languageCode,
        name: language.languageName.simpleText
      }

      // Add it to the output array
      tLangs.push(tlang)
    })
  }

  // Edit the output array
  var captionsList: CaptionsList = {
    captions,
    translation_langs: tLangs
  }

  // Return the output
  return captionsList
  
});

/**
 * Download the caption track given its ID.
 */
exports.getCaptionTrack = functions.https.onCall(async (data) => {
  // Get the videoId and the language
  const videoId = data.videoId;
  const lang = data.lang;

  // Check that it is defined
  if (!lang || !videoId) {
    // Return an error
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The Video ID and Language are required.'
    );
  }

  // Create the search parameters
  var params = new URLSearchParams({
    v: videoId,
    lang,
  });

  // Create a fetch request to the timed text endpoint
  try {
    var res = await fetch(
      `https://www.youtube.com/api/timedtext?${params.toString()}`
    );
  } catch {
    // Throw an internal error
    throw new functions.https.HttpsError(
      'internal',
      `Couldn't access the YouTube API.`
    );
  }

  // Check the status of the response
  if (!res.ok) {
    switch (res.status) {
      case 400:
        throw new functions.https.HttpsError(
          'invalid-argument',
          'A bad request was made to YouTube.'
        );
      case 403:
        throw new functions.https.HttpsError(
          'permission-denied',
          `Access to YouTube was denied.`
        );
      case 404:
        throw new functions.https.HttpsError(
          'not-found',
          `The YouTube video doesn't exist.`
        );
    }
  }

  // Get the buffer
  var buffer = await res.bodyUsed;

  // Convert it to a string
  var xml = buffer.toString();

  // Parse the XML string
  try {
    var parsed = await parseStringPromise(xml);
  } catch (err) {
    // Throw an internal error
    throw new functions.https.HttpsError(
      'internal',
      `Couldn't parse the transcript.`,
      err
    );
  }

  // Get the transcript from the XML
  if(parsed){
    var transcript = parsed.transcript;
  } else {
    var transcript = undefined;
  }

  return transcript;
});
