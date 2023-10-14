import { useEffect } from 'react';
import StarRating from './StarRating'

import './Modal.scss';

function Modal({
  selectedMovieID,
  setModalIsOpen,
  selectedMovieObj,
  setSelectedMovieObj,
}) {
  function getSingleMovieApi() {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2//movies/${selectedMovieID}`,
    )
      .then(res => res.json())
      .then(data => {
        setSelectedMovieObj(data);
        console.log(data);
      })
      .catch(err => console.log(err));
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
        <div
          className="backdrop-image"
          style={{
            display: 'flex',
            gap: '5rem',
            color: 'white',
            height: '100vh',
            backgroundImage: `linear-gradient(
      rgba(15, 15, 15, 0.6),
  rgba(15, 15, 15, 0.6)
    ), url(${selectedMovieObj.movie.backdrop_path})`,
          }}
        >
          <div
            className="BackToDisplay"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="backArrow"
              style={{ height: '100px', width: '100px' }}
              onClick={handleBackArrowClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="movieDetails">
          <img
  id={selectedMovieObj.movie.id}
  src={selectedMovieObj.movie.poster_path}
  alt={selectedMovieObj.movie.title}
  className="movie-image"
  style={{
    width: '200px',
    height: '300px'
  }}
/>
            <div className="movie-title">{selectedMovieObj.movie.title}</div>
            <h2>
              <span className="label">Release Date:</span>{' '}
              <br></br>
              <br></br>
              {selectedMovieObj.movie.release_date}
            </h2>
            <h2>
              <span className="label">Average Rating:</span>{' '}
            <StarRating rating={Math.round(selectedMovieObj.movie.average_rating)} />
            </h2>
            <h2>
              {selectedMovieObj.movie.overview}
            </h2>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
           

export default Modal;
