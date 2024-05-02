/// <reference types="cypress" />

describe("Sign Up Accessibility test suite", () => {
  before(() => {
    cy.visit("https://rahulshettyacademy.com/locatorspractice/");
    cy.injectAxe();
  });

  it("Check entire page for a11y issues", () => {
    cy.checkA11y();
  });
});
