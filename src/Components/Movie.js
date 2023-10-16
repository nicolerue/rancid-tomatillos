import StarRating from "./StarRating";
import "./Movie.scss";

function Movie({
  movieObj,
  setModalIsOpen,
  modalIsOpen,
  selectedMovieID,
  setSelectedMovieID,
}) {
  function handleMovieClick(e) {
    setModalIsOpen(true);
    setSelectedMovieID(parseInt(e.target.id));
  }

  return (
    <div className="movie" id={movieObj.id}>
      <img
        id={movieObj.id}
        src={movieObj.poster_path}
        alt={movieObj.title}
        className="movieImg"
        style={{
          width: "200px",
          height: "300px",
          display: "block",
          margin: "0 auto",
        }}
        onClick={handleMovieClick}
      />
      <span>
        <StarRating rating={Math.round(movieObj.average_rating)} />
      </span>
    </div>
  );
}

export default Movie;
