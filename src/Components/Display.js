import Movie from "./Movie";
import { useEffect } from "react";

function Display({
  setModalIsOpen,
  modalIsOpen,
  selectedMovieID,
  setSelectedMovieID,
  apiMovieData,
  setError,
  setApiMovieData,
}) {
  function getMoviesFromApi() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Oops! Something went wrong on the server. Please try again later."
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setApiMovieData(data.movies);
      })
      .catch((error) => {
        setError(error.message || "An unknown error occurred.");
        console.log(error);
      });
  }

  useEffect(() => {
    getMoviesFromApi();
    setApiMovieData(apiMovieData);
    setModalIsOpen(false);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "5rem",
        marginLeft: "5rem",
        marginRight: "5rem",
      }}
    >
      {apiMovieData.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movieObj={movie}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
            selectedMovieID={selectedMovieID}
            setSelectedMovieID={setSelectedMovieID}
          />
        );
      })}
    </div>
  );
}

export default Display;
