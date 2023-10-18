import StarRating from "./StarRating";
import "./Movie.scss";
import { useNavigate } from "react-router-dom";
function Movie({ movieObj, setModalIsOpen, modalIsOpen, setSelectedMovieID }) {
  const navigate = useNavigate();

  function handleMovieClick(e) {
    setModalIsOpen(!modalIsOpen);
    setSelectedMovieID(movieObj.id);
    navigate(`/${movieObj.id}`);
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
