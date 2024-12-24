const { defineConfig } = require("cypress");
const dotenv = require("dotenv").config() //load environment variables from .env file

module.exports = defineConfig({
  projectId: "idelsoft-gh-automation",
  e2e: {
    setupNodeEvents(on, config) {
      //configure browser for headless to not use gpu for CI
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          //add other options 
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-gpu')
          return launchOptions
        }
      })
      config.env.BASE_URL = process.env.BASE_URL
      config.env.CYPRESS_ENVIRONMENT = process.env.CYPRESS_ENVIRONMENT
      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './cypress/results', 
      overwrite: true,
      html: true,
      json: true 
    },
    video: true,
    screenshots: true,
    trashAssetsBeforeRuns: false,
  },
});
