import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Display from "./Components/Display";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";
import PageNotFound from "./Components/PageNotFound";
import { getMoviesFromApiDisplay } from "./Components/apiCalls";
import "./App.scss";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState("");
  const [apiMovieData, setApiMovieData] = useState([]);
  const [selectedMovieObj, setSelectedMovieObj] = useState({});
  const [selectedMovieTrailerLink, setSelectedMovieTrailerLink] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getMoviesFromApiDisplay()
      .then((data) => {
        setApiMovieData(data.movies);
      })
      .catch((error) => {
        setError(error.message || "An unknown error occurred.");
      });
    setApiMovieData(apiMovieData);
    setModalIsOpen(false);
  }, []);

  return (
    <main>
      <NavBar
        setApiMovieData={setApiMovieData}
        setError={setError}
        apiMovieData={apiMovieData}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Display
              apiMovieData={apiMovieData}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              selectedMovieID={selectedMovieID}
              setSelectedMovieID={setSelectedMovieID}
              setSelectedMovieTrailerLink={setSelectedMovieTrailerLink}
              setApiMovieData={setApiMovieData}
              setError={setError}
            />
          }
        />

        <Route
          path={`/:id`}
          element={
            <Modal
              setModalIsOpen={setModalIsOpen}
              selectedMovieObj={selectedMovieObj}
              setSelectedMovieObj={setSelectedMovieObj}
              selectedMovieTrailerLink={selectedMovieTrailerLink}
              setSelectedMovieTrailerLink={setSelectedMovieTrailerLink}
              setError={setError}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
export default App;
