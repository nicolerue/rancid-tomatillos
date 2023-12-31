import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";

function SearchBar({ setApiMovieData, setError }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    setSearchInput(e.target.value);
    getMoviesFromApi();
  }

  function getMoviesFromApi() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Oops! Something went wrong on the server. Please try again later."
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        const filteredMovies = data.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(searchInput.toLowerCase());
        });
        setApiMovieData(filteredMovies);
      })
      .catch((error) => {
        setError(error.message || "An unknown error occurred.");
      });
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search...."
        value={searchInput}
        onChange={handleInputChange}
      />
      <button>
        <span role="img" className="search-icon" aria-label="search-icon">
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  setApiMovieData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
