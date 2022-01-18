import { useState } from "react";
import { Link } from "react-router-dom";

function Tracks(props) {
  const [formState, newFormState] = useState({
    title: "",
    artist: "",
    coverArt: "",
    project: "",
    genre: "",
  });

  const tracks = props.tracks;

  const loaded = () => {
    return tracks.map((track) => (
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
    ));
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
