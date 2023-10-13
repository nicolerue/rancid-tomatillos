import StarRating from "./StarRating";

function Movie({ movieObj, setModalIsOpen }) {

  function handleImageClick() {
    setModalIsOpen(true)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "5px 5px 10px"
      }}
    >
      <img
        src={movieObj.poster_path}
        alt={movieObj.title}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
        onClick={handleImageClick}
      />
      <span>
        <StarRating rating={Math.round(movieObj.average_rating)} />
      </span>
    </div>
  );
}

export default Movie;
