import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <Link to="/sarify/home">
        <img
          src="https://i.imgur.com/vBc6UJb.png"
          alt="home-icon"
          style={{ height: "25px", width: "25px" }}
        />
      </Link>
      <Link to="/sarify/tracks">
        <img
          src="https://i.imgur.com/72xhKjz.png"
          alt="tracks-icon"
          style={{ height: "25px", width: "25px" }}
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
          style={{ height: "25px", width: "25px" }}
          onClick={login}
        />
      )}
    </nav>
  );
}

export default Header;
