import { useState } from "react";
import UpdateForm from "../components/UpdateForm";
import "./Track.css";

function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.find((track) => track._id === id);

  const [update, setUpdate] = useState(false);

  const handleDelete = () => {
    props.deleteTrack(id);
    props.history.push("/sarify/tracks");
  };

  const handleForm = () => {
    !update ? setUpdate(true) : setUpdate(false);
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
          <UpdateForm
            user={props.user}
            id={id}
            foundTrack={foundTrack}
            updateTrack={props.updateTrack}
            setUpdate={setUpdate}
          />
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
