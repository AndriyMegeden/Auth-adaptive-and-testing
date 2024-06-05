// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  remoteApi: 'https://vorfahrqr.de',
  remoteClientId: 'BtowJqGu6JVhPaEskof27xj0CihrkHDKBMTHSTuh',
  remoteClientSecret: 'nzBKaEu5aSraJKHiKqGz3a2bRA2BK5G1pmhlFqDo6nSsL92JuuGkvZc7IYxdbElqv2Bcz8Pfa2ofv7an2hL2DsmFOEVSixpULMlsPTqjDdvqQb8bN6VpPlKX8uxz3GMh',
  googleClientId: '763400884097-f6jl1mh4dim26lb64488otpcoemrd900.apps.googleusercontent.com',
  facebookCLientId: '311244781545637',
  facebookPermissions: ['email','public_profile'],
  languages: {
    available: ['en', 'deu', 'ua'],
    default: 'en'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
