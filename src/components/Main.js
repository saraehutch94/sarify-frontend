import Home from "../pages/Home";
import Tracks from "../pages/Tracks";
import Track from "../pages/Track";

function Main(props) {
  return (
    <div className="main-component">
      <h1>Main Component</h1>
      <Home />
      <Tracks />
      <Track />
    </div>
  );
}

export default Main;
