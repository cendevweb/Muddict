// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://conduit.productionready.io/api',
  firebase: {
    apiKey: 'AIzaSyCxqySVi2HnWiykANM_UpxVETbpqlU9dGE',
    authDomain: 'muddict-163210.firebaseapp.com',
    databaseURL: 'https://muddict-163210.firebaseio.com',
    projectId: 'muddict-163210',
    storageBucket: 'muddict-163210.appspot.com',
    messagingSenderId: '124281471230'
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
