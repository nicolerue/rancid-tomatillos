import "./NavBar.scss";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar({ setApiMovieData, setError, apiMovieData }) {
  return (
    <div className="navbar">
      <LogoHeader />
      <SearchBar
        setApiMovieData={setApiMovieData}
        setError={setError}
        apiMovieData={apiMovieData}
      />
      <Link to="/"></Link>
      <br></br>
    </div>
  );
}

export default NavBar;
