import "./App.scss";
import { useState } from 'react'
import Display from "./Components/Display";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";
import movieData from "./movieData.js";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <main>
      <NavBar />
      {!modalIsOpen ? <Display movieData={movieData} setModalIsOpen={setModalIsOpen} /> : 
      <Modal />}
    </main>
  );
}

export default App;
