import { useState } from "react";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search...." />
      <button>
        <span role="img" className="search-icon" aria-label="search-icon">
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
