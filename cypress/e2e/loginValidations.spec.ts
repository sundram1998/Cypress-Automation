describe("validations reated to login", () => {
  it("Lgin to page with custom command", () => {
    cy.visit("https://rahulshettyacademy.com/locatorspractice/");
    const username = "Test.com";
    const password = "1234";
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();

    cy.get("li").filter(':contains("Services")').should("have.length", 2);
  });
});
