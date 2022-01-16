import Home from "../pages/Home";
import Tracks from "../pages/Tracks";
import Track from "../pages/Track";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function Main(props) {
  const [tracks, setTracks] = useState([]);

  const URL = "https://sarify-backend.herokuapp.com/sarify/tracks";

  const getTracks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTracks(data);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="main-component">
      <Switch>
        <Route exact path="/sarify/home">
          <Home />
        </Route>
        <Route path="/sarify/tracks">
          <Tracks />
        </Route>
        <Route path="/sarify/track/:id">
          <Track />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
