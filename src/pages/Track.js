import { useState } from "react";
import UpdateForm from "../components/UpdateForm";
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
        <form className="update-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={trackForm.title}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="artist"
              value={trackForm.artist}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="coverArt"
              value={trackForm.coverArt}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="project"
              value={trackForm.project}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="genre"
              value={trackForm.genre}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="duration"
              value={trackForm.duration}
              onChange={handleChange}
              disabled={!props.user}
              className="update-input"
            />
          </label>
          <br />
          <input
            type="submit"
            value="Submit Changes"
            className="update-submit"
            disabled={!props.user}
          />
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
            {props.user ? (
              <div className="button-flex">
                <button
                  className="track-button-user update-button"
                  onClick={handleForm}
                >
                  Update Track
                </button>
                <button className="track-button-user" onClick={handleDelete}>
                  Delete Track
                </button>
              </div>
            ) : (
              <div className="button-flex">
                <button
                  className="track-button-disable update-button"
                  disabled={!props.user}
                >
                  Update Track
                </button>
                <button className="track-button-disable" disabled={!props.user}>
                  Delete Track
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Track;
