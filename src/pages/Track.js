import { useState } from "react";
import UpdateForm from "../components/UpdateForm";
import Buttons from "../components/Buttons";
import "./Track.css";

function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.find((track) => track._id === id);

  const [update, setUpdate] = useState(false);

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
            <Buttons
              user={props.user}
              update={update}
              setUpdate={setUpdate}
              deleteTrack={props.deleteTrack}
              id={id}
              history={props.history}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Track;
