const { defineConfig } = require("cypress");
const dotenv = require("dotenv").config() //load environment variables from .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL
      config.env.CYPRESS_ENVIRONMENT = process.env.CYPRESS_ENVIRONMENT
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    video: true,
    videoUploadOnPasses: true,
    screenshots: true,
    trashAssetsBeforeRuns: false,
    reporter: '@shelex/cypress-allure-plugin',
    reporterOptions: {
      debug: true,
    }
  },
});
