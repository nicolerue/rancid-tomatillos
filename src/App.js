import "./App.scss";
import Display from "./Components/Display";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";
import movieData from "./movieData.js";
import { useState, useEffect } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState("");
  const [apiMovieData, setApiMovieData] = useState([]);
  const [selectedMovieObj, setSelectedMovieObj] = useState({});
  const [error, setError] = useState(null)

 
  function getMoviesFromApi() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Oops! Something went wrong on the server. Please try again later.");
        } else {
          return res.json();
        }
      })
      .then((data) => {
          setApiMovieData(data.movies);
      })
      .catch((error) => {
        setError(error.message || 'An unknown error occurred.');
        console.log(error)
      });
  }
  
  useEffect(() => {
    getMoviesFromApi();
  }, []);

  return (
    <main>
      <NavBar />
      {error && <div className='error-message'>{error}</div>}
      {!modalIsOpen ? (
        <Display
          movieData={movieData}
          apiMovieData={apiMovieData}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          selectedMovieID={selectedMovieID}
          setSelectedMovieID={setSelectedMovieID}
        />
      ) : (
        <Modal
          setModalIsOpen={setModalIsOpen}
          movieData={movieData}
          apiMovieData={apiMovieData}
          selectedMovieID={selectedMovieID}
          setSelectedMovieID={setSelectedMovieID}
          selectedMovieObj={selectedMovieObj}
          setSelectedMovieObj={setSelectedMovieObj}
        />
      )}
    </main>
  );
}

export default App;
