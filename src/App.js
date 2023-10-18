import './App.scss';
import Display from './Components/Display';
import NavBar from './Components/NavBar';
import Modal from './Components/Modal';
import movieData from './movieData.js';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [displayOpen, setDisplayOpen] = useState(true);
  const [selectedMovieID, setSelectedMovieID] = useState('');
  const [apiMovieData, setApiMovieData] = useState([]);
  const [selectedMovieObj, setSelectedMovieObj] = useState({});
  const [selectedMovieTrailerLink, setSelectedMovieTrailerLink] = useState('');
  const [error, setError] = useState(null);

  function getMoviesFromApi() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'Oops! Something went wrong on the server. Please try again later.'
          );
        } 
          return res.json();
        
      })
    }
    
    useEffect(() => {
      const modalStorage = localStorage.getItem('modalState');
      if (modalStorage === 'open') {
        setModalIsOpen(true);
      }
    })


    useEffect(() => {
      getMoviesFromApi()
      .then(data => {
        return setApiMovieData(data.movies);
      })
      .catch(error => {
        setError(error.message || 'An unknown error occurred.');
        console.log(error);
      });
    
  }, []);

  return (
    <main>
      <NavBar />
      <Routes>
        {error && <div className="error-message">{error}</div>}
        {!modalIsOpen ? (
          <Route
            path="/"
            element={
              <Display
                movieData={movieData}
                apiMovieData={apiMovieData}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                selectedMovieID={selectedMovieID}
                setSelectedMovieID={setSelectedMovieID}
              />
            }
          />
        ) : (
          <Route
            path={`/:id`}
            element={
              <Modal
                setModalIsOpen={setModalIsOpen}
                movieData={movieData}
                apiMovieData={apiMovieData}
                selectedMovieID={selectedMovieID}
                setSelectedMovieID={setSelectedMovieID}
                selectedMovieObj={selectedMovieObj}
                setSelectedMovieObj={setSelectedMovieObj}
                selectedMovieTrailerLink={selectedMovieTrailerLink}
                setSelectedMovieTrailerLink={setSelectedMovieTrailerLink}
              />
            }
          />
        )}
      </Routes>
    </main>
  );
}
export default App;
