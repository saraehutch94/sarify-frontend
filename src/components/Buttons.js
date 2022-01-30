import "./Buttons.css";

function Buttons(props) {
  const handleForm = () => {
    // toggle between truthy and falsy values
    !props.update ? props.setUpdate(true) : props.setUpdate(false);
  };

  const handleDelete = () => {
    // call props.deleteTrack when delete button is clicked
    props.deleteTrack(props.id);
    // redirect to Tracks page component
    props.history.push("/sarify/tracks");
  };

  const userButtons = () => {
    return (
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
    );
  };

  const disabledButtons = () => {
    return (
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
    );
  };
  //   if there is a user present, show userButtons();
  //   otherwise, show disabledButtons();
  return props.user ? userButtons() : disabledButtons();
}

export default Buttons;
