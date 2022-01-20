import { useState } from "react";
import { Link } from "react-router-dom";

function Tracks(props) {
  const [trackState, setTracks] = useState();
  const tracks = props.tracks;

  const loaded = () => {
    return (
      <div className="tracks">
        <div className="contribute-link">
          <Link to="/sarify/create">
            <button disabled={!props.user}>Contribute</button>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <label for="genre">Select Genre:</label>
          <select name="genre" id="genre">
            <option value="All">All Genres</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="R&B">R&B</option>
            <option value="Alternative">Alternative</option>
          </select>
          <input type="submit" value="Get Genre" />
        </form>

        <div className="all-tracks">
          {tracks.map((track) => {
            return (
              <div key={track._id} className="ind-track">
                <img
                  src={track.coverArt}
                  alt={track.title}
                  style={{ height: "100px", width: "100px" }}
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

  const loading = () => {
    return <h1>Curating...</h1>;
  };

  return (
    <div className="tracks-component">
      {props.tracks ? loaded() : loading()}
    </div>
  );
}

export default Tracks;
