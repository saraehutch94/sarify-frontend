import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <img
        src="https://i.imgur.com/1eXt2uo.png"
        alt="playlist-photo"
        className="vinyl-image"
      />
      <div className="title-and-underline">
        <div className="title">sarify</div>
        <div className="underline-header"></div>
      </div>
      <nav className="nav-icons">
        <Link to="/">
          <div className="home-icon"></div>
        </Link>
        <Link to="/sarify/tracks">
          <div className="header-music-icon"></div>
        </Link>
        {/* if there is a user present, show logout icon with logout function
        otherwise, show login icon with login function */}
        {props.user ? (
          <div className="header-logout-icon" onClick={logout}></div>
        ) : (
          <div className="header-login-icon" onClick={login}></div>
        )}
        <a
          href="https://github.com/saraehutch94/sarify-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header-github-icon"></div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
