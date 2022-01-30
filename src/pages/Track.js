import { useState } from "react";
import UpdateForm from "../components/UpdateForm";
import Buttons from "../components/Buttons";
import "./Track.css";

function Track(props) {
  // grab id of individual track
  const id = props.match.params.id;

  // find individual track within tracks data using id of track
  const foundTrack = props.tracks.find((track) => track._id === id);

  // set initial state of update to falsy value (update form not shown)
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
        {/* if update is a truthy value, render UpdateForm component
        otherwise, just show track details with Buttons component for updating and deleting */}
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
