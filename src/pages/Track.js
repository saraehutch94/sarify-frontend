import { useState } from "react";
import "./Track.css";

function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.find((track) => track._id === id);

  const [trackForm, setTrackForm] = useState(foundTrack);
  const [update, setUpdate] = useState(false);

  const handleChange = (e) => {
    setTrackForm({
      ...trackForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateTrack(trackForm, id);
    setUpdate(false);
  };

  const handleDelete = () => {
    props.deleteTrack(id);
    props.history.push("/sarify/tracks");
  };

  const handleForm = () => {
    !update ? setUpdate(true) : setUpdate(false);
  };

  const updateForm = () => {
    return (
      <div className="track-details">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={trackForm.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="artist"
              value={trackForm.artist}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="coverArt"
              value={trackForm.coverArt}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="project"
              value={trackForm.project}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="genre"
              value={trackForm.genre}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="duration"
              value={trackForm.duration}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  };

  return (
    <div className="single-track-wrapper">
      <div className="single-track">
        <div className="image">
          <img
            src={foundTrack.coverArt}
            alt={foundTrack.project}
            className="track-image"
          />
        </div>
        {update ? (
          updateForm()
        ) : (
          <div className="track-details">
            <h2 className="ind-track-title">{foundTrack.title}</h2>
            <h2 className="ind-track-artist">{foundTrack.artist}</h2>
            <p className="ind-track-project">{foundTrack.project}</p>
            <p className="ind-track-genre">{foundTrack.genre}</p>
            <button disabled={!props.user} onClick={handleForm}>
              Update Track
            </button>
            <button disabled={!props.user} onClick={handleDelete}>
              Delete Track
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Track;
