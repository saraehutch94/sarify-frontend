import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import "./Tracks.css";

function Tracks(props) {
  // set initial trackState to string "All" (all genres)
  const [trackState, setTracks] = useState("All");

  // shorthand variable for props.trackss
  const tracks = props.tracks;

  const setGenre = (genre) => {
    // set setTracks to selected genre
    setTracks(genre);
  };

  const allLoaded = () => {
    return (
      <div className="tracks-wrapper-whole">
        <div className="playlist-title">top played</div>
        <div className="track-page-content">
          <Link to="/sarify/create">
            {/* if no user is present, disable contribute button
            otherwise, show contribute button */}
            {!props.user ? (
              <button className="contribute-button" disabled={!props.user}>
                Contribute
              </button>
            ) : (
              <button className="contribute-button-user">Contribute</button>
            )}
          </Link>
          <Dropdown setGenre={setGenre} />
        </div>
        <div className="all-tracks">
          {/* map through tracks data and render each individual track
          using id as special key for each track */}
          {tracks.map((track) => {
            return (
              <div key={track._id} className="ind-track">
                <Link
                  to={`/sarify/tracks/${track._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="track-grid">
                    <img
                      src={track.coverArt}
                      alt={track.title}
                      style={{ height: "50px", width: "50px" }}
                      className="track-coverArt"
                    />

                    <div className="grid-item-title">{track.title}</div>

                    <div className="grid-item">{track.artist}</div>
                    <div className="grid-item">{track.duration}</div>
                    <div className="grid-item-play">
                      <input
                        type="image"
                        alt="play-icon"
                        src="https://i.imgur.com/7fRCgab.png"
                        className="play-icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const genreLoaded = () => {
    return (
      <div className="tracks-wrapper-whole">
        <div className="playlist-title">top played</div>
        <div className="track-page-content">
          <Link to="/sarify/create">
            {/* if no user is present, disable contribute button
            otherwise, show contribute button */}
            {!props.user ? (
              <button className="contribute-button" disabled={!props.user}>
                Contribute
              </button>
            ) : (
              <button className="contribute-button-user">Contribute</button>
            )}
          </Link>
          <Dropdown setGenre={setGenre} />
        </div>
        <div className="all-tracks">
          {/* filter through tracks data and grab specific tracks based on
         which genre was chosen in dropdown menu (trackState), map through results and
        render each individual track using id as special key for each track */}
          {tracks
            .filter((t) => t.genre === trackState)
            .map((filteredTrack) => (
              <div key={filteredTrack._id} className="ind-track">
                <Link
                  to={`/sarify/tracks/${filteredTrack._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="track-grid">
                    <img
                      src={filteredTrack.coverArt}
                      alt={filteredTrack.title}
                      style={{ height: "50px", width: "50px" }}
                    />
                    <div className="grid-item-title">{filteredTrack.title}</div>
                    <div className="grid-item">{filteredTrack.artist}</div>
                    <div className="grid-item">{filteredTrack.duration}</div>
                    <div className="grid-item-play">
                      <input
                        type="image"
                        alt="play-icon"
                        src="https://i.imgur.com/7fRCgab.png"
                        className="play-icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const loading = () => {
    // data is still being grabbed from database
    return <h1>Curating...</h1>;
  };

  const determineLoad = () => {
    // if trackState (dropdown selection) is "All", show all genres
    // otherwise, show tracks that have specific genre
    return trackState === "All" ? allLoaded() : genreLoaded();
  };
  // if data is still being grabbed from database, show loading()
  // otherwise, show determineLoad();
  return <div>{props.tracks ? determineLoad() : loading()}</div>;
}

export default Tracks;
