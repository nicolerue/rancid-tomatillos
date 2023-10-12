import { useState } from 'react'
import './SearchBar.scss'

function SearchBar() {
  return (
    <div className='search-container'>
      <input 
      type='text'
      class='search-input'
      placeholder='Search....'
      />
      <button>
        <span role='img' 
        class='search-icon' 
        aria-label='search-icon'>
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
