/**
 * Create variables for the production environment.
 */

// Import the version from package.json
import { version } from '../../package.json';

// Setup the environment variables
export const environment = {
  production: true,
  appVersion: version,
  stripe: {
    publishableKey:
      'pk_live_51HhpYRKhhuCbc2FakmShlIJmRpVMAmCY9rkIlU5qJGklyCaTEo9QVocfD9cPq7ucKN4Kj70tgy4qA368UbAseU3K00PNcTeUpX',
  },
  firebase: {
    apiKey: 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o',
    authDomain: 'transcript-app-290409.firebaseapp.com',
    databaseURL: 'https://transcript-app-290409.firebaseio.com',
    projectId: 'transcript-app-290409',
    storageBucket: 'transcript-app-290409.appspot.com',
    messagingSenderId: '153388996756',
    appId: '1:153388996756:web:08ac13df83b49a2eeb3c81',
    measurementId: 'G-C7XF9CKB3V',
  },
  baseApiUrl: 'https://us-central1-transcript-app-290409.cloudfunctions.net/',
};
