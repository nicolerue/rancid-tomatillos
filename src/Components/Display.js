import Movie from "./Movie";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { getMoviesFromApiDisplay } from "./apiCalls";
import './Display.scss'

function Display({
  setModalIsOpen,
  modalIsOpen,
  selectedMovieID,
  setSelectedMovieID,
  apiMovieData,
  setError,
  setApiMovieData,
}) {
  useEffect(() => {
    getMoviesFromApiDisplay()
      .then((data) => {
        setApiMovieData(data.movies);
      })
      .catch((error) => {
        setError(error.message || "An unknown error occurred.");
      });
    setApiMovieData(apiMovieData);
    setModalIsOpen(false);
  }, []);

  return (
    <div
      className='movie-display'
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "1fr 1fr 1fr 1fr",
      //   gap: "5rem",
      //   marginLeft: "5rem",
      //   marginRight: "5rem",
      // }}
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

Display.propTypes = {
  setModalIsOpen: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  setSelectedMovieID: PropTypes.func.isRequired,
  apiMovieData: PropTypes.array.isRequired,
  setError: PropTypes.func.isRequired,
  setApiMovieData: PropTypes.func.isRequired
};
