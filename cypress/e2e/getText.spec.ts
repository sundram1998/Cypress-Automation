describe("Get Text Practice", function () {
  it("get a Text and verify that it includes certain text", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // let str = "";
    cy.get("tbody tr td")
      .eq(0)
      .then(($string) => {
        // cy.contains("Interview").should("be.visible");
        const str = $string.text();
        cy.log(str);
        cy.get('input[name="enter-name"]').clear().type(str);
      });
    cy.get('input[id="alertbtn"]').click();
    cy.log("successful");

    cy.get('table[id="product"]')
      .eq(1)
      .then(($textString) => {
        const tableString = $textString.text();
        cy.log(tableString);
      });
  });
  it("multiple text box", function () {
    cy.visit(
      "http://127.0.0.1:5501/Udemy/SectionNine-DataStructureAndMordernOperator/index.html"
    );
    cy.get("div>input").each(($textbox, index) => {
      cy.wrap($textbox).type(index.toString());
    });
  });
});
