/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// cypress/support/commands.js

// Create a module or use an existing one (e.g., declare-cypress.d.ts)
declare module "cypress" {
  interface Chainable {
    login(username: string, password: string): void;
  }
}

// Your Cypress command file (e.g., commands.js)
declare namespace Cypress {
  interface Chainable<Subject = any> {
    // Use keyof to ensure that "login" is a valid key of Chainable<any>
    login: (username: string, password: string) => Chainable<Subject>;
  }
}

// Your Cypress command file (e.g., commands.js)
Cypress.Commands.add("login", (username: string, password: string) => {
  cy.visit("https://rahulshettyacademy.com/locatorspractice/");
  cy.get("input#inputUsername").type(username);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get("#login-button").click();
});
