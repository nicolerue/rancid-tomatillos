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
        // fixture: "single-movie-trailer-response",
      }
    );
  });

  // Returning a 404 and no fixture above to avoid cypress making post and requests for ads.

  it("it shows the movie details", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[alt="The Woman King"]').click();
    cy.get('[alt="The Woman King"]')
      .should("have.attr", "src")
      .get(".movie-title")
      .should("have.text", "The Woman King");
  });
});

// check for elements that are on the page, e.g. h2

// ATTEMPT AT STUBBING YOUTUBE ADS
// describe("When movie image is clicked it shows", () => {
//   beforeEach(() => {
//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
//       {
//         statusCode: 200,
//         fixture: "page-load-response",
//       }
//     );

//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
//       {
//         statusCode: 200,
//         fixture: "single-movie-response",
//       }
//     );

//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos",
//       {
//         statusCode: 200,
//         fixture: "single-movie-trailer-response",
//       }
//     );
//     cy.intercept("GET", "https://googleads.g.doubleclick.net/pagead/id", {
//       statusCode: 404,
//     });

//     cy.intercept(
//       "POST",
//       "https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/Create",
//       {
//         statusCode: 404,
//       }
//     );
//   });

//   it("it shows the movie details", () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[alt="The Woman King"]').click();
//   });
// });
