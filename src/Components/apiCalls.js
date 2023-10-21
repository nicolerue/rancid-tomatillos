export function getMoviesFromApiDisplay() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    res => {
      if (!res.ok) {
        throw new Error(
          'Oops! Something went wrong on the server. Please try again later.',
        );
      } else {
        return res.json();
      }
    },
  );
}
export function getSingleMovieApi(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`,
  ).then(res => {
    if (!res.ok) {
      throw new Error(
        'Oops! Something went wrong on the server. Please try again later.',
      );
    } else {
      return res.json();
    }
  });
}

export function getSingleMovieVideoApi(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`,
  ).then(res => {
    if (!res.ok) {
      throw new Error(
        'Oops! Something went wrong on the server. Please try again later',
      );
    } else {
      return res.json();
    }
  });
}
