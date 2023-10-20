describe('When the user clicks on a movie image', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'page-load-response',
      },
    );

    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495',
      {
        statusCode: 200,
        fixture: 'single-movie-response',
      },
    );

    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos',
      {
        statusCode: 404,
        // fixture: "single-movie-trailer-response",
      },
    );
  });

  // Returning a 404 and no fixture above to avoid cypress making post and requests for ads.
  it;

  it('it shows the movie details', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('contain', 'Rancid Tomatillos');
    cy.get('.search-input').should('be.visible');
    cy.get('[alt="The Woman King"]').click();
    cy.get('[alt="The Woman King"]').should('have.attr', 'src');
    cy.get('.backdrop-image').should('be.visible');
    cy.get('.movie-title').should('have.text', 'The Woman King');
    cy.get('.overview').should('contain', 'p')
    cy.url().should('eq', 'http://localhost:3000/724495').wait(1000)
    cy.get('.backArrow').click()
    // cy.url().should('eq', 'http://localhost:3000')
    
  });

 
});


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
