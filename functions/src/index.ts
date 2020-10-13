/**
 * This file contains the backend Firebase Functions for the Transcrypt application.
 *
 * @author Jacob Ian Matthews
 * @date 13/10/20
 * @version 1.0
 */

import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

/**
 * Exchange a refresh token for an access token to be used with the YouTube API.
 * @returns a string with the access token.
 */
async function getAccessToken(): Promise<string> {
  // Define the client information
  const client_id =
    '153388996756-r5lhbisriii8l7s130jcqqao1fhmdmjd.apps.googleusercontent.com';
  const client_secret = 'AV7JZxEhl10Tb75FyLGpiE7P';

  // Define the refresh token
  const refresh_token =
    '1//04BAACVN9X9r6CgYIARAAGAQSNwF-L9Ir-eu3kLrjuWKCtiaevppuVbQ7uPgPsNdBzPgDlvL9KnHMHepbE2ywU1tJfbQyhkQVOrc';

  // Create a request using URLSearchParams
  const params = new URLSearchParams();
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refresh_token);

  // Send the request to Google's OAuth service and get a response
  try {
    var response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: params.toString(),
    });
  } catch {
    // Throw an internal error
    const err = {
      code: 500,
      error: {
        error: 'internal_error',
        error_description: "Couldn't access Google OAuth2.0 Service.",
      },
    };
    throw err;
  }

  // Check the response status
  if (response.ok) {
    // Get the body of the response and return the access_token
    var body = await response.json();

    // Return the access token from the body
    return body.access_token;
  } else {
    // Return the error code and reason to the client
    var err = {
      code: response.status,
      error: await response.json(),
    };
    throw err;
  }
}

/**
 * Fetch the list of captions for a YouTube video.
 */
exports.getCaptionsList = functions.https.onCall(async (data) => {
  // Check for a videoID
  if (!data.videoId) {
    // Throw an error
    throw new functions.https.HttpsError(
      'invalid-argument',
      'YouTube videoId required.'
    );
  }

  // Get an access token from Google
  try {
    var token = await getAccessToken();
  } catch (err) {
    if (err.code === 500) {
      // Return an internal error to the client
      throw new functions.https.HttpsError(
        'internal',
        err.error.error_description
      );
    } else if (err.code === 400) {
      // Return an invalid request error to the client
      throw new functions.https.HttpsError(
        'invalid-argument',
        err.error.error_description
      );
    } else if (err.code === 403) {
      // Return an access denied error to the client
      throw new functions.https.HttpsError(
        'permission-denied',
        err.error.error_description
      );
    } else {
      // Return an unknown error
      throw new functions.https.HttpsError(
        'unknown',
        err.error.error_description
      );
    }
  }

  // Get the video ID from the data object
  const videoId = data.videoId;

  // Create some parameters for the search
  const params = new URLSearchParams();
  params.append('videoId', videoId);
  params.append('part', 'snippet');
  params.append('key', 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o');

  // Make a request to the YouTube API
  try {
    var response = await fetch(
      `https://www.googleapis.com/youtube/v3/captions?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch {
    // Return an internal error to the client
    throw new functions.https.HttpsError(
      'internal',
      `Couldn't access the YouTube API.`
    );
  }

  // Check the status of the response
  if (!response.ok) {
    // Check what the status returned was
    if (response.status === 404) {
      // The YouTube video doesn't exist, throw an error
      throw new functions.https.HttpsError(
        'not-found',
        'The YouTube video does not exist.'
      );
    }

    if (response.status === 400) {
      // The request was bad
      throw new functions.https.HttpsError(
        'invalid-argument',
        'A bad request was made to the YouTube API.'
      );
    }

    if (response.status === 403) {
      // The bearer token must have been bad
      throw new functions.https.HttpsError(
        'permission-denied',
        'Access to the YouTube API was denied.'
      );
    }
  }

  // Return the body of the response to the client
  var body = await response.json();
  return { body };
});
