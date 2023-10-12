import { useState } from 'react'

function SearchBar() {
  return (
    <div>
      <input 
      type='text'
      placeholder='Search....'
      />
      <button>
        <span role='img' aria-label='search-icon'>🔍</span>
      </button>
    </div>
  );
}

export default SearchBar;
