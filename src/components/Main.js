import Home from "../pages/Home";
import Tracks from "../pages/Tracks";
import Track from "../pages/Track";
import CreateTrack from "../pages/CreateTrack";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function Main(props) {
  const [tracks, setTracks] = useState([]);

  // const URL = "https://sarify-backend.herokuapp.com/sarify/tracks/";
  const URL = "http://localhost:3001/sarify/tracks";

  // index/all tracks
  const getTracks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTracks(data);
  };

  // create track
  const createTrack = async (track) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(track),
    });
    getTracks();
  };

  // update track
  const updateTrack = async (track, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(track),
    });
    getTracks();
  };

  // delete track
  const deleteTrack = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getTracks();
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="main-component">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sarify/tracks">
          <Tracks tracks={tracks} createTrack={createTrack} user={props.user} />
        </Route>
        <Route
          path="/sarify/tracks/:id"
          render={(rp) => (
            <Track
              {...rp}
              tracks={tracks}
              updateTrack={updateTrack}
              deleteTrack={deleteTrack}
              user={props.user}
            />
          )}
        />
        <Route
          path="/sarify/create"
          render={(rp) =>
            props.user ? (
              <CreateTrack {...rp} createTrack={createTrack} />
            ) : (
              <Redirect to="/sarify/tracks" />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default Main;
