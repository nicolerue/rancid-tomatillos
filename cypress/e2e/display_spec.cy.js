describe("When movie image is clicked it shows", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "page-load-response",
    })

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {
      statusCode: 200,
      fixture: "single-movie-response",
    })

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos", {
      statusCode: 200,
      fixture: "single-movie-trailer-response",
    });
  });

  it("it shows the movie details", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[alt="The Woman King"]')
  });
});





