/**
 * This file imports the firebase functions.
 */
import { FunctionParser } from 'firebase-backend';

exports = new FunctionParser(__dirname, exports).exports;
