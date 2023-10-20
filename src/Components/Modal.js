import { useEffect, useState } from 'react';
import StarRating from './StarRating';
import { useParams } from 'react-router-dom';
import './Modal.scss';
import { useNavigate } from 'react-router-dom';
import YoutubeEmbedVideo from 'youtube-embed-video';
import PropTypes from 'prop-types';

function Modal({
  setModalIsOpen,
  selectedMovieObj,
  setSelectedMovieObj,
  selectedMovieTrailerLink,
  setSelectedMovieTrailerLink,
  setError
}) {
  const paramsID = useParams();
  const navigate = useNavigate();
  const [error, setErrorMessage] = useState('');


  function getSingleMovieApi() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${paramsID.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setSelectedMovieObj(data);
      })
      .catch((err) => {
        setError("Error fetching movie data: " + err.message);
      });
  }
  

  function getSingleMovieVideoApi() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${paramsID.id}/videos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const trailer = data.videos.find((video) => {
          return video.type === 'Trailer';
        });
        const trailerKey = trailer.key;
        setSelectedMovieTrailerLink(trailerKey);
      })
      .catch((err) => {
        setError("Error fetching movie video: " + err.message);
      });
  }
  

  useEffect(() => {
    getSingleMovieApi();
    getSingleMovieVideoApi();
    setSelectedMovieObj(selectedMovieObj);
  }, []);

  function handleBackArrowClick() {
    setModalIsOpen(false);
    navigate('/');
  }
  return (
    <div>
      {error ? (
        <section className="error-message">{error}</section>
      ) : selectedMovieObj.movie ? (
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
                height: '300px',
              }}
            />
            <div className="movie-title">{selectedMovieObj.movie.title}</div>
            <h2>
              <span className="label">Release Date:</span> <br></br>
              <br></br>
              {selectedMovieObj.movie.release_date}
            </h2>
            <h2>
              <span className="label">Average Rating:</span>{' '}
              <StarRating
                rating={Math.round(selectedMovieObj.movie.average_rating)}
              />
            </h2>
            <h2>{selectedMovieObj.movie.overview}</h2>
            {selectedMovieTrailerLink && (
              <YoutubeEmbedVideo
                videoId={selectedMovieTrailerLink}
                suggestions={false}
              />
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  setModalIsOpen: PropTypes.func,
  selectedMovieObj: PropTypes.object,
  setSelectedMovieObj: PropTypes.func,
  selectedMovieTrailerLink: PropTypes.string,
  setSelectedMovieTrailerLink: PropTypes.func,
};
