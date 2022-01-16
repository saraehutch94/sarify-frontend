import Home from "../pages/Home";
import Tracks from "../pages/Tracks";
import Track from "../pages/Track";
import { Route, Switch } from "react-router-dom";

function Main(props) {
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
