import StarRating from "./StarRating";
import "./Movie.scss";
import { useNavigate } from "react-router-dom";
function Movie({
  movieObj,
  setModalIsOpen,
  modalIsOpen,
  setSelectedMovieID,
}) {
  const navigate = useNavigate();
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    if (!modalIsOpen) {
      localStorage.setItem('modalState', 'open');
    } else {
      localStorage.removeItem('modalState');
    }
  };

  function handleMovieClick(e) {
    toggleModal();
    setSelectedMovieID(parseInt(e.target.id));
    navigate(`/${parseInt(e.target.id)}`);
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