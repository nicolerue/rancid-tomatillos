import Movie from "./Movie";

function Display({ movieData, setModalIsOpen }) {
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
      {movieData.movies.map((movie) => {
        return <Movie key={movie.id} movieObj={movie} setModalIsOpen={setModalIsOpen}/>;
      })}
    </div>
  );
}

export default Display;
