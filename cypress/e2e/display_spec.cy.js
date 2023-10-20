describe("When the user clicks on a movie image", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "page-load-response",
      }
    );

    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
      {
        statusCode: 200,
        fixture: "single-movie-response",
      }
    );

    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos",
      {
        statusCode: 404,
      }
    );
  });

  it("shows the movie details", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Rancid Tomatillos");
    cy.get(".search-input").should("be.visible");

    cy.get('[alt="The Woman King"]').click();
    cy.get('[alt="The Woman King"]').should("have.attr", "src");
    cy.get(".backdrop-image").should("be.visible");
    cy.get(".movie-title").should("have.text", "The Woman King");
    cy.get(".overview").should("contain", "p");
    cy.url().should("eq", "http://localhost:3000/724495").wait(1000);
    cy.get(".backArrow").click();
    // cy.url().should('eq', 'http://localhost:3000')

  });
});
