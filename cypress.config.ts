import { defineConfig } from "cypress";
// import allureWriter = require("@shelex/cypress-allure-plugin/writer");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
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
