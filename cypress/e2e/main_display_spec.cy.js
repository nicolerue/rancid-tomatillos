describe("user visiting the rancid tomatillos home page", () => {
  it("should display a main page with a title, a search bar that is editable", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 201,
        fixture: "page-load-response",
      }
    );

    cy.visit("http://localhost:3000/");
    cy.url().should("include", "");
    cy.get("h1").should("have.text", "Rancid Tomatillos");
    cy.get('.search-input').should('be.visible').type("The").should("have.value", "The");
  });
});

// check for images
//sad paths 

