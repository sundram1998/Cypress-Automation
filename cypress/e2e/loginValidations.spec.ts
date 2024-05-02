/// <reference types="cypress" />
import "../support/commands";
describe("validations reated to login", () => {
  it("Lgin to page with custom command", () => {
    cy.login("test", "password");
    cy.login("a", 5);
    cy.visit("https://rahulshettyacademy.com/locatorspractice/");
    const username = "Test.com";
    const password = "1234";
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
    cy.contains("button", "Submit").should("be.visible");

    // cy.get("li").filter(':contains("Services")').should("have.length", 2);
    // cy.url().should("include", "/transfer");
  });
});
