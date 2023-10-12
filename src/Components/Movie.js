import StarRating from "./StarRating";

function Movie({ movieObj }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{`${movieObj.title} (${movieObj.release_date.slice(0, 4)})`}</h2>
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
      />
      <span>
        <StarRating rating={Math.round(movieObj.average_rating)} />
      </span>
    </div>
  );
}

export default Movie;
