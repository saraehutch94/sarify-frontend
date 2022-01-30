function Buttons(props) {
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
}

export default Buttons;
