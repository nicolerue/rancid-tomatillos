import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoHeader from './LogoHeader';
import SearchBar from './SearchBar';
import './NavBar.scss';

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

NavBar.propType = {
  setApiMovieData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  apiMovieData: PropTypes.array.isRequired,
};
