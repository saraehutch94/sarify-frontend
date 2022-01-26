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
      <div className="tracks-wrapper">
        <div className="tracks">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>

          <Dropdown setGenre={setGenre} />

          <div className="all-tracks">
            {tracks.map((track) => {
              return (
                <div key={track._id} className="ind-track">
                  <img
                    src={track.coverArt}
                    alt={track.title}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <Link to={`/sarify/tracks/${track._id}`}>
                    <span>{track.title}</span>
                  </Link>
                  <span>{track.artist}</span>
                  <span>{track.duration}</span>
                  <span></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const genreLoaded = () => {
    return (
      <div className="tracks-wrapper">
        <div className="tracks">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>

          <Dropdown setGenre={setGenre} />

          <div className="all-tracks">
            {tracks
              .filter((t) => t.genre === trackState)
              .map((filteredTrack) => (
                <div key={filteredTrack._id} className="ind-track">
                  <img
                    src={filteredTrack.coverArt}
                    alt={filteredTrack.title}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <Link to={`/sarify/tracks/${filteredTrack._id}`}>
                    <h2>{filteredTrack.title}</h2>
                  </Link>
                </div>
              ))}
          </div>
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
