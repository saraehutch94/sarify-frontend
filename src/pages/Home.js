import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <div classNam="content-wrapper">
          <h1>sarify</h1>
          <div className="home-nav">
            <Link to="/sarify/tracks">
              <div className="music-icon"></div>
            </Link>
            {props.user ? (
              <div className="google-logout-icon" onClick={logout}></div>
            ) : (
              <div className="google-login-icon" onClick={login}></div>
            )}
            <a
              href="https://github.com/saraehutch94/sarify-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/X20Qz9B.png"
                alt="github-watermark"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
