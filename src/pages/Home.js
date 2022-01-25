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
              <input
                type="image"
                src="https://i.imgur.com/NVAHAOs.png"
                alt="logout-icon"
                style={{ height: "25px", width: "25px" }}
                onClick={logout}
              />
            ) : (
              <div className="google-login-icon" onClick={login}></div>
              // <input
              //   type="image"
              //   src="https://i.imgur.com/IIUGvUg.png"
              //   alt="login-icon"
              //   style={{
              //     height: "25px",
              //     width: "25px",
              //     filter: "brightness(0) invert(1)",
              //   }}
              //   onClick={login}
              // />
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
