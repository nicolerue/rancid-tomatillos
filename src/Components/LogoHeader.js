import tomatoImage from '../tomato2.avif';
import './LogoHeader.scss';

function LogoHeader() {
  return (
    <div className="header">
      <img className="tomato-logo" src={tomatoImage} alt="tomato-logo" />
      <h1>Rancid Tomatillos</h1>
    </div>
  );
}

export default LogoHeader;
