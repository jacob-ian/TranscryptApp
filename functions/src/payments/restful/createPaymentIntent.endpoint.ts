import * as functions from 'firebase-functions';
import Stripe from 'stripe';
import { Post } from 'firebase-backend';
import { Request, Response } from 'express';

const stripe = createStripeInstance();

function createStripeInstance(): Stripe {
  const stripeSecret = isDevelopmentMode()
    ? getTestStripeSecret()
    : getLiveStripeSecret();

  return new Stripe(stripeSecret, {
    apiVersion: '2020-08-27',
  });
}

function isDevelopmentMode(): boolean {
  return process.env.DEVELOPMENT ? true : false;
}

function getTestStripeSecret(): string {
  const config = require('../../../secret.json');
  return config.stripe.secret;
}

function getLiveStripeSecret(): string {
  return functions.config().stripe.secret;
}

export default new Post(async (req: Request, res: Response) => {
  const paymentAmount = req.body['amount'];
  const paymentCurrency = req.body['currency'];
  return await respondWithPaymentIntent(res, paymentAmount, paymentCurrency);
});

async function respondWithPaymentIntent(
  res: Response,
  amount: number,
  currency: string
): Promise<Response> {
  try {
    const paymentIntent = await newPaymentIntent(amount, currency);
    return respondSuccess(res, paymentIntent);
  } catch (error) {
    return respondError(res, error);
  }
}

async function newPaymentIntent(
  amount: number,
  currency: string
): Promise<any> {
  try {
    return await stripe.paymentIntents.create({ amount, currency });
  } catch (error) {
    throw error;
  }
}

function respondSuccess(response: Response, data: any): Response {
  return response.status(201).send(data);
}

function respondError(response: Response, error: any): Response {
  if (error.statusCode && error.raw) {
    return response.status(error.statusCode).send(error.raw);
  }
  return response.status(500).send(error);
}
