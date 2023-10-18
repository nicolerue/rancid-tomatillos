describe("When movie image is clicked it shows", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/", {
      statusCode: 200,
      fixture: "savannah_breweries"
    })
    .visit("http://localhost:3000/")
  });
  
    it("it shows the movie details", () => {
      cy.visit("http://localhost:3000/");
      cy.get('[alt="The Woman King"]').click();
      cy.contains("2022-09-15").should("exist");
  });
});
