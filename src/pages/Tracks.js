import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import "./Tracks.css";

function Tracks(props) {
  const [trackState, setTracks] = useState("All");
  const tracks = props.tracks;

  const setGenre = (genre) => {
    setTracks(genre);
  };

  const allLoaded = () => {
    return (
      <div className="tracks-wrapper-whole">
        <div className="track-page-content">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>
          <Dropdown setGenre={setGenre} />
        </div>
        <div className="all-tracks">
          {tracks.map((track) => {
            return (
              <div key={track._id} className="ind-track">
                <img
                  src={track.coverArt}
                  alt={track.title}
                  style={{ height: "50px", width: "50px" }}
                />
                <Link to={`/sarify/tracks/${track._id}`}>
                  <div>{track.title}</div>
                </Link>
                <div>{track.artist}</div>
                <div>{track.duration}</div>
                <input
                  type="image"
                  alt="play-icon"
                  src="https://i.imgur.com/7fRCgab.png"
                  className="play-icon"
                />
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
        <div className="track-page-content">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>
          <Dropdown setGenre={setGenre} />
        </div>
        <div className="all-tracks">
          {tracks
            .filter((t) => t.genre === trackState)
            .map((filteredTrack) => (
              <div key={filteredTrack._id} className="ind-track">
                <div className="grid-element">
                  <img
                    src={filteredTrack.coverArt}
                    alt={filteredTrack.title}
                    style={{ height: "50px", width: "50px" }}
                  />
                </div>
                <Link
                  to={`/sarify/tracks/${filteredTrack._id}`}
                  className="grid-element"
                >
                  <div>{filteredTrack.title}</div>
                </Link>
                <div className="grid-element">{filteredTrack.artist}</div>
                <div className="grid-element">{filteredTrack.duration}</div>
                <div className="grid-element">
                  <input
                    type="image"
                    alt="play-icon"
                    src="https://i.imgur.com/7fRCgab.png"
                    className="play-icon"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Curating...</h1>;
  };

  const determineLoad = () => {
    return trackState === "All" ? allLoaded() : genreLoaded();
  };

  return <div>{props.tracks ? determineLoad() : loading()}</div>;
}

export default Tracks;
