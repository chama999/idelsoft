const { defineConfig } = require("cypress");
const dotenv = require("dotenv").config() //load environment variables from .env file

module.exports = defineConfig({
  projectId: "idelsoft-gh-automation",
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL
      config.env.CYPRESS_ENVIRONMENT = process.env.CYPRESS_ENVIRONMENT
      return config;
    },
    video: true,
    screenshots: true,
    trashAssetsBeforeRuns: false,
  },
});
