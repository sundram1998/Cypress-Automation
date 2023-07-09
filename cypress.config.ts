import { defineConfig } from "cypress";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
export default defineConfig({
  e2e: {
    env: {
      url: "https://rahulshettyacademy.com",
      allureReuseAfterSpec: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // const _ = require("lodash"); // yup, dev dependencies
      // const path = require("path"); // yup, core node library
      // const debug = require("debug"); // yup, dependencies
      // const User = require("./lib/models/user"); // yup, relative local modules
      allureWriter(on, config);
      return config;

      // console.log(__dirname); // /Users/janelane/Dev/my-project
      // console.log(process.cwd()); // /Users/janelane/Dev/my-project
    },
    specPattern: ["**/*.cy.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    excludeSpecPattern: [],
  },
  retries: { runMode: 1, openMode: 0 },
  numTestsKeptInMemory: 50,
  defaultCommandTimeout: 25000,
  chromeWebSecurity: true,
});
