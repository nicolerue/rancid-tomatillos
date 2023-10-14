import { useEffect } from "react";

import "./Modal.scss";

function Modal({
  selectedMovieID,
  setModalIsOpen,
  selectedMovieObj,
  setSelectedMovieObj,
}) {
  function getSingleMovieApi() {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2//movies/${selectedMovieID}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSelectedMovieObj(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getSingleMovieApi();
  }, []);

  function handleBackArrowClick() {
    setModalIsOpen(false);
  }

  return (
    <div>
      {selectedMovieObj.movie ? (
        <div className="backdrop-image"
          style={{
            display: "flex",
            gap: "5rem",
            color: "white",
            height: "70vh",
            backgroundImage: `linear-gradient(
      rgba(15, 15, 15, 0.6),
  rgba(15, 15, 15, 0.6)
    ), url(${selectedMovieObj.movie.backdrop_path})`,
          }}
        >
          <div
            className="BackToDisplay"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="backArrow"
              style={{ height: "100px", width: "100px" }}
              onClick={handleBackArrowClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <p>Back</p>
          </div>
          <div className="movieDetails">
            <h1>{selectedMovieObj.movie.title}</h1>
            <h2>Release Date: {selectedMovieObj.movie.releaseDate}</h2>
            <h2>Budget: {selectedMovieObj.movie.budget}</h2>
            <h2>Revenue ${selectedMovieObj.movie.revenue}</h2>
            <h2>Overview: {selectedMovieObj.movie.overview}</h2>
            <h2>Average Rating: {selectedMovieObj.movie.average_rating}/10</h2>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Modal;
