import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="title">Sarify</div>
      <nav className="nav-icons">
        <Link to="/">
          <img
            src="https://i.imgur.com/vBc6UJb.png"
            alt="home-icon"
            style={{
              height: "25px",
              width: "25px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>
        <Link to="/sarify/tracks">
          <img
            src="https://i.imgur.com/72xhKjz.png"
            alt="tracks-icon"
            style={{
              height: "25px",
              width: "25px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>
        {props.user ? (
          <input
            type="image"
            src="https://i.imgur.com/NVAHAOs.png"
            alt="logout-icon"
            style={{ height: "25px", width: "25px" }}
            onClick={logout}
          />
        ) : (
          <input
            type="image"
            src="https://i.imgur.com/IIUGvUg.png"
            alt="login-icon"
            style={{
              height: "25px",
              width: "25px",
              filter: "brightness(0) invert(1)",
            }}
            onClick={login}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
