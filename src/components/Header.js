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
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Header;
