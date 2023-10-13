import "./NavBar.scss";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="navbar"> 
      <LogoHeader />
      <SearchBar />
      <br></br>
    </div>
  );
}

export default NavBar;
