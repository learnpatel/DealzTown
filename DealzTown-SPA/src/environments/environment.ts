import { AngularFireDatabaseModule } from 'angularfire2/database';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api/',
  firebase: {
    apiKey: 'AIzaSyBpQNINfSgi3VEOwldH1t2VbQgG_BSFozk',
    authDomain: 'dealztownstore.firebaseapp.com',
    databaseURL: 'https://dealztownstore.firebaseio.com',
    projectId: 'dealztownstore',
    storageBucket: 'dealztownstore.appspot.com',
    messagingSenderId: '1015309492339'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
