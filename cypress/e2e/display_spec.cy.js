describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[alt="The Woman King"]').click();
    cy.contains("2022-09-15").should("exist");
  });
});
