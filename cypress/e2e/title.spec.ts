describe("Get and validate the title and use css selectors", () => {
  beforeEach(() => {
    cy.fixture("users.json").then((data) => {
      this.data = data;
    });
  });
  it("Get the title ", () => {
    cy.visit("https://guide.blazemeter.com/hc/en-us");
    cy.title().should("eq", "BlazeMeter");
  });
});
