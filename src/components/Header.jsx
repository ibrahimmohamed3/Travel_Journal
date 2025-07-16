
import "../App.css";
import worldwideImg from "../assets/worldwide.png"; // Make sure this image exists

function Header() {
  return (
    <header className="header">
      <img src={worldwideImg} alt="World Logo" className="header--logo" />
      <h1 className="header--title">My Travel Journal</h1>
    </header>
  );
}

export default Header;