import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <Link to="/sarify/home">
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/sarify/tracks">
        <div className="nav-item">Tracks</div>
      </Link>
    </nav>
  );
}

export default Header;
