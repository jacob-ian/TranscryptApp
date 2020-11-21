// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the package verison
import { version } from '../../package.json';

export const environment = {
  production: false,
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
  appVersion: version,
  stripe: {
    publishableKey:
      'pk_test_51HhpYRKhhuCbc2Farf3EqB5FSTcJxTdr3RZgtP5AiGszwCbvjrtA9yWesTWxHvLQRCp3GIQGeI0O1RhMl1xkAYsB000FvKf5us',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
