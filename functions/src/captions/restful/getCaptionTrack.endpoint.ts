import * as functions from 'firebase-functions';
import { Get } from 'firebase-backend';
import { Request, Response } from 'express';
import base64url from 'base64url';
import { context, Response as FetchResponse } from 'fetch-h2';
import { parseStringPromise } from 'xml2js';

const { fetch } = context({
  httpProtocol: 'http2',
});

export default new Get(async (req: Request, res: Response) => {
  const captionTrackUrl = getCaptionUrlFromRequest(req.body);
  const captionTrackXml = await getCaptionTrackXml(captionTrackUrl);
  return res.status(200).send(captionTrackXml);
});

function getCaptionUrlFromRequest(body: any): string {
  const videoQuery = getDecodedVideoQuery(body['data']);
  const translation = getTranslationParam(body['tlang']);

  if (!videoQuery) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      "Missing parameter 'data'."
    );
  }

  const captionTrackUrl = createCaptionTrackUrl(videoQuery, translation);
  return captionTrackUrl;
}

function getDecodedVideoQuery(data: string | undefined): string | undefined {
  return data ? base64url.decode(data) : undefined;
}

function getTranslationParam(tlang: string | undefined): string {
  return tlang ? `&tlang=${tlang}` : '';
}

function createCaptionTrackUrl(videoQuery: string, translation: string) {
  return `https://www.youtube.com/api/timedtext?${videoQuery}${translation}`;
}

async function getCaptionTrackXml(captionTrackUrl: string): Promise<string> {
  const readableStream = await getReadableStreamFromUrl(captionTrackUrl);
  const unparsedTranscript = await getRawTranscriptFromStream(readableStream);
  const xmlParsedTranscript = await parseTranscriptXml(unparsedTranscript);
  return xmlParsedTranscript;
}

async function getReadableStreamFromUrl(
  location: string
): Promise<NodeJS.ReadableStream> {
  try {
    let response = await fetch(location);
    return getReadableFromResponse(response);
  } catch (error) {
    switch (error.code) {
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
      default:
        throw new functions.https.HttpsError('internal', 'An error occurred.');
    }
  }
}

async function getReadableFromResponse(
  response: FetchResponse
): Promise<NodeJS.ReadableStream> {
  if (response.ok) {
    return await response.readable();
  }
  throw { code: response.status, message: await response.json() };
}

async function getRawTranscriptFromStream(
  stream: NodeJS.ReadableStream
): Promise<string> {
  try {
    return await getDataFromStream(stream);
  } catch (error) {
    throw new functions.https.HttpsError(
      'internal',
      "Couldn't download transcript. Try again later."
    );
  }
}

function getDataFromStream(stream: NodeJS.ReadableStream): Promise<any> {
  stream.setEncoding('utf-8');
  return new Promise((resolve, reject) => {
    let data = '';
    stream.on('data', (chunk) => (data += chunk));
    stream.on('end', () => resolve(data));
    stream.on('error', (error) => reject(error));
  });
}

async function parseTranscriptXml(unparsedXml: string): Promise<string> {
  let parsedXml = await parseXmlString(unparsedXml);
  if (!parsedXml) {
    throw new functions.https.HttpsError(
      'internal',
      'We were unable to parse the transcript.'
    );
  }
  let transcript = parsedXml.transcript;
  return transcript;
}

async function parseXmlString(unparsedXml: string): Promise<any> {
  try {
    return await parseStringPromise(unparsedXml);
  } catch (error) {
    throw new functions.https.HttpsError(
      'internal',
      'Could not load transcript.'
    );
  }
}
