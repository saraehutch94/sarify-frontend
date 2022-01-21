import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";

function Tracks(props) {
  const [trackState, setTracks] = useState("All");
  const tracks = props.tracks;

  const setGenre = (e) => {
    e.preventDefault();
    setTracks(e.target.value);
  };

  const allLoaded = () => {
    return (
      <div className="tracks">
        <div className="contribute-link">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>
        </div>

        <label htmlFor="genre">Select Genre:</label>
        <select name="genre" id="genre" onChange={handleChange}>
          <option select="true" value="All">
            All Genres
          </option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="R&B">R&B</option>
          <option value="Alternative">Alternative</option>
        </select>

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
                  <h2>{track.title}</h2>
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
      <div className="tracks">
        <div className="contribute-link">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>
        </div>

        <label htmlFor="genre">Select Genre:</label>
        <select name="genre" id="genre" onChange={handleChange}>
          <option select="true" value="All">
            All Genres
          </option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="R&B">R&B</option>
          <option value="Alternative">Alternative</option>
        </select>

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
