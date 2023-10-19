import "./App.scss";
import Display from "./Components/Display";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState("");
  const [apiMovieData, setApiMovieData] = useState([]);
  const [selectedMovieObj, setSelectedMovieObj] = useState({});
  const [selectedMovieTrailerLink, setSelectedMovieTrailerLink] = useState("");
  const [error, setError] = useState(null);

  return (
    <main>
      <NavBar
        setApiMovieData={setApiMovieData}
        setError={setError}
        apiMovieData={apiMovieData}
      />
      <Routes>
        {error && <div className="error-message">{error}</div>}

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
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
export default App;
