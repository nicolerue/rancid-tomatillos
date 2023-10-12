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
    setModalIsOpen(!modalIsOpen);
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
      <h2
        id={movieObj.id}
        onClick={handleMovieClick}
        className="movieTitle"
      >{`${movieObj.title} (${movieObj.release_date.slice(0, 4)})`}</h2>
      <img
        id={movieObj.id}
        src={movieObj.poster_path}
        alt={movieObj.title}
        className="movieImg"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
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
