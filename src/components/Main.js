import Home from "../pages/Home";
import Header from "./Header";
import Tracks from "../pages/Tracks";
import Track from "../pages/Track";
import CreateTrack from "../pages/CreateTrack";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function Main(props) {
  // set initial tracks state to empty array
  const [tracks, setTracks] = useState([]);

  // Heroku API URL for requests
  const URL = "https://sarify-backend.herokuapp.com/sarify/tracks/";

  // index/all tracks
  const getTracks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTracks(data);
  };

  // create track
  const createTrack = async (track) => {
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
          <Home user={props.user} />
        </Route>
        <Route exact path="/sarify/tracks">
          <Header user={props.user} />
          <Tracks tracks={tracks} createTrack={createTrack} user={props.user} />
        </Route>
        <Route
          path="/sarify/tracks/:id"
          render={(rp) => (
            <>
              <Header user={props.user} />
              <Track
                {...rp}
                tracks={tracks}
                updateTrack={updateTrack}
                deleteTrack={deleteTrack}
                user={props.user}
              />
            </>
          )}
        />
        <Route
          path="/sarify/create"
          render={(rp) =>
            props.user ? (
              <>
                <Header user={props.user} />
                <CreateTrack {...rp} createTrack={createTrack} />
              </>
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
