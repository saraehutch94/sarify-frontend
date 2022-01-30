import "./Buttons.css";

function Buttons(props) {
  const handleForm = () => {
    !props.update ? props.setUpdate(true) : props.setUpdate(false);
  };

  const handleDelete = () => {
    props.deleteTrack(props.id);
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
  return props.user ? userButtons() : disabledButtons();
}

export default Buttons;
