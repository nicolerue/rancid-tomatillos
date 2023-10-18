import './NavBar.scss';
import LogoHeader from './LogoHeader';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <LogoHeader />
      <SearchBar />
      <Link to="/"></Link>
      <br></br>
    </div>
  );
}

export default NavBar;
