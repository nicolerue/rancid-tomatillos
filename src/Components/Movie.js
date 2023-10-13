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
    <div
      id={movieObj.id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        id={movieObj.id}
        src={movieObj.poster_path}
        alt={movieObj.title}
        className="movieImg"
        style={{
          width: "200px",
          height: "300px",
          // width: "auto",
          // height: "auto",
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
