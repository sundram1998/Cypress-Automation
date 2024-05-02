import { data } from "cypress/types/jquery";

describe("This is a demo for interview", () => {
  beforeEach(() => {
    cy.fixture("example.json").then(function (data) {
      this.data = data;
    });
  });
  it("Test case for login Validation", function () {
    const json = this.data;
    const firstName = json.details.name;
    cy.log(firstName);
    cy.pause();
    cy.login("sundaram", "Test1234");
    cy.get("cssSelector")
      .filter(':contains("services")')
      .should("have.length", 2);
  });
});
