const { defineConfig } = require('cypress')

const readXlsx = require('./cypress/plugins/read-xlsx')

module.exports = defineConfig({
  chromeWebSecurity: false,
  videoCompression: false,
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  overwrite: true,
  screenshotsFolder: "cypress/screenshots",
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 50000,
  viewportHeight: 660,
  viewportWidth: 1000,
  retries: 1, //Quantidade de tentativas que deverá ser realizado 
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
    toConsole: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),

      on('task', {
        'readXlsx': readXlsx.read
      })
    },
    
    baseUrl: 'https://gatling.io/',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  }

})
