export function login() {
  cy.visit("https://demo.applitools.com/#");
  cy.contains("Login Form").should("be.visible");
  let usertext = "";
  cy.get('div[class="form-group"]>label')
    .eq(1)
    .then(($text) => {
      usertext = $text.text();
    });
  cy.get("input#username").type(usertext);
  cy.get("input#password").type("password");
  cy.get("a#log-in").click();
  cy.get("a.logo").should("have.attr", "href", "#");
  cy.get("a.logo>div:nth-of-type(2)").contains("ACME");
}
