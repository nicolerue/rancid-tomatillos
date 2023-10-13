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

  function getMoviesFromApi() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => res.json())
      .then((data) => {
        setApiMovieData(data.movies);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getMoviesFromApi();
  }, []);

  return (
    <main>
      <NavBar />
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
