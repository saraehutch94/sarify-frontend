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
        <div>
          <img
            src={props.user.photoURL}
            alt={props.user.displayName}
            style={{
              height: "3.125rem",
              width: "3.125rem",
              borderRadius: "50%",
            }}
          />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
}

export default Header;
