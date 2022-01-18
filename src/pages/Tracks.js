import { useState } from "react";
import { Link } from "react-router-dom";

function Tracks(props) {
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
    coverArt: "",
    project: "",
    genre: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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
      <h2>Add a Track:</h2>
      <form>
        <label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="artist"
            value={formState.artist}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="coverArt"
            value={formState.coverArt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="project"
            value={formState.project}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="genre"
            value={formState.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Add Track" />
      </form>
    </div>
  );
}

export default Tracks;
