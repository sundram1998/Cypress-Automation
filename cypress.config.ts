import { defineConfig } from "cypress";
// import allureWriter = require("@shelex/cypress-allure-plugin/writer");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
var allure = require("allure-commandline");

// returns ChildProcess instance
var generation = allure(["generate", "allure-results"]);

generation.on("exit", function (exitCode) {
  console.log("Generation is finished with code:", exitCode);
});
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.HOST_ENV || "dev";

      const baseUrls = {
        dev: "https://rahulshettyacademy.com/seleniumPractise/#/",
        qa1: "https://rahulshettyacademy.com/AutomationPractice/",
        prod: "https://www.google.co.in/",
      };
      config.baseUrl = baseUrls[environment];

      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results",
    },
    specPattern: ["**/*.cy.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    excludeSpecPattern: [],
  },
  retries: { runMode: 1, openMode: 0 },
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 25000,
  pageLoadTimeout: 100000,
  chromeWebSecurity: true,
});
