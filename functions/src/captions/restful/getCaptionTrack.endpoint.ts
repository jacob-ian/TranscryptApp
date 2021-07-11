import { Get } from 'firebase-backend';
import { Request, Response } from 'express';
import base64url from 'base64url';
import { context, Response as FetchResponse } from 'fetch-h2';
import { parseStringPromise } from 'xml2js';

const { fetch } = context({
  httpProtocol: 'http2',
});

export default new Get(async (req: Request, res: Response) => {
  try {
    let captionTrack = await getCaptionTrack(req);
    return respondWithCaptionTrack(res, captionTrack);
  } catch (error) {
    return respondWithError(res, error);
  }
});

async function getCaptionTrack(req: Request): Promise<string> {
  const captionTrackUrl = getCaptionUrlFromRequest(req);
  const captionTrackXml = await getCaptionTrackXml(captionTrackUrl);
  return captionTrackXml;
}

function getCaptionUrlFromRequest(req: any): string {
  const videoQuery = getDecodedVideoQuery(req.query['data']);
  const translation = getTranslationParam(req.query['tlang']);

  if (!videoQuery) {
    throw { code: 400, message: "Missing parameter 'data'." };
  }

  const captionTrackUrl = createCaptionTrackUrl(videoQuery, translation);
  return captionTrackUrl;
}

function getDecodedVideoQuery(data: string | undefined): string | undefined {
  try {
    return !!data ? base64url.decode(data) : undefined;
  } catch (error) {
    throw { code: 500, message: 'Could not decode requested video.' };
  }
}

function getTranslationParam(tlang: string | undefined): string {
  return !!tlang ? `&tlang=${tlang}` : '';
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
    let readableStream = getReadableFromResponse(response);
    return readableStream;
  } catch (error) {
    throw error;
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
    throw {
      code: 500,
      message: "Couldn't download transcript. Try again later.",
    };
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
    throw {
      code: 500,
      message: 'We were unable to create the transcript. Please try again.',
    };
  }
  let transcript = parsedXml.transcript;
  return transcript;
}

async function parseXmlString(unparsedXml: string): Promise<any> {
  try {
    return await parseStringPromise(unparsedXml);
  } catch (error) {
    throw {
      code: 500,
      message: 'Could not load the transcript.',
      context: error,
    };
  }
}

function respondWithCaptionTrack(
  res: Response,
  captionTrack: string
): Response {
  return res
    .set({ 'Access-Control-Allow-Origin': '*' })
    .status(200)
    .send(captionTrack);
}

function respondWithError(res: Response, error: any): Response {
  res = enableCors(res);
  logErrorToConsole(error);

  if (error.code) {
    return res
      .status(error.code)
      .json({ error: error.code, error_message: error.message });
  }

  return res.status(500).json(error);
}

function logErrorToConsole(error: any): void {
  console.error(`Error: ${JSON.stringify(error)}`);
}

function enableCors(res: Response): Response {
  return res.set({ 'Access-Control-Allow-Origin': '*' });
}
