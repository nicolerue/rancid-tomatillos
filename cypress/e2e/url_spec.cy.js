describe("url changes when the user clicks a movie image and navigates back home", () => {
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
        statusCode: 200,
        fixture: "single-movie-trailer-response",
      }
    );
  });

  it("should change the url to include the movie id in the url path when a movie image is clicked, and then back to the root url when the user navigates back", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[alt="The Woman King"]').click();
    cy.url().should("include", "/724495");
    cy.get(".backArrow").click();
    cy.url().should("not.include", "/724495");
  });

  it("should return a 'page not found' error message to the user if the user navigates to a url that does not exist", () => {
    cy.visit("http://localhost:3000/724495/123");
    cy.get(".not-found").should("have.text", "Page Not Found!");
    cy.visit("http://localhost:3000/123");
    cy.get(".not-found").should("have.text", "Page Not Found!");
  });
});
