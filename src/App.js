import "./App.scss";
import Display from "./Components/Display";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";
import movieData from "./movieData.js";

function App() {
  return (
    <main>
      <NavBar />
      <Display movieData={movieData} />
      <Modal />
    </main>
  );
}

export default App;
