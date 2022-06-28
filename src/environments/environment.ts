// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false,
  plantsEndpoint:"http://localhost:8080/plants",
  weatherApiUrl:"https://api.openweathermap.org/data/2.5/weather?zip=77406&appid=cafab08b41482e6535a2574a24e44ce3&units=imperial",
  baseApiUrl: "http://localhost:8080",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
