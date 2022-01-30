function UpdateForm(props) {
  const handleChange = (e) => {
    props.setTrackForm({
      ...props.trackForm,
      [e.target.name]: e.target.value,
    });
  };

  const updateFormUser = () => {
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

  const updateFormDisable = () => {};
}

export default UpdateForm;
