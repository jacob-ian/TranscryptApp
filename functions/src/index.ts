/**
 * This file contains the backend Firebase Functions for the Transcrypt application.
 *
 * @author Jacob Ian Matthews
 * @date 13/10/20
 * @version 1.0
 */

import * as functions from 'firebase-functions';
import { google } from 'googleapis';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

/**
 * Create an OAuth2.0 client.
 */
const oauth2Client = new google.auth.OAuth2(
  '153388996756-r5lhbisriii8l7s130jcqqao1fhmdmjd.apps.googleusercontent.com',
  'AV7JZxEhl10Tb75FyLGpiE7P',
  'https://developers.google.com/oauthplayground'
);

// Add the refresh token to the OAuth2.0 client
oauth2Client.setCredentials({
  refresh_token:
    '1//04BAACVN9X9r6CgYIARAAGAQSNwF-L9Ir-eu3kLrjuWKCtiaevppuVbQ7uPgPsNdBzPgDlvL9KnHMHepbE2ywU1tJfbQyhkQVOrc',
});

// Create the YouTube API client
const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

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

  // Access the YouTube API to get the captions list
  try {
    var res = await youtube.captions.list({
      key: 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o',
      videoId,
      part: ['snippet'],
    });

    // Get the data from the response
    var items = res.data.items;

    // Return the response
    return { items };
  } catch (err) {
    // Get the information from the error
    var code = err.code;
    var details = err.details;

    // Check the code
    if (code === 400) {
      // Create a bad request error
      throw new functions.https.HttpsError('invalid-argument', details);
    } else if (code === 403) {
      // Create a permission denied error
      throw new functions.https.HttpsError('permission-denied', details);
    } else if (code === 404) {
      // Throw an error that the video doesn't exist
      throw new functions.https.HttpsError(
        'not-found',
        "The YouTube video doesn't exist."
      );
    } else {
      throw new functions.https.HttpsError('unknown', details);
    }
  }
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
  var buffer = await res.buffer();

  // Convert it to a string
  var bufferString = buffer.toString();

  return bufferString;
});
