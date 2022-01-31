import { useState } from "react";
import UpdateDropdown from "./UpdateDropdown";
import "./UpdateForm.css";

function UpdateForm(props) {
  // set initial track state to props.foundTrack
  const [trackForm, setTrackForm] = useState(props.foundTrack);

  const handleChange = (e) => {
    // when form value is changed, set setTrackForm to initial trackForm
    // plus specific input's name as property and input's value as object property value
    setTrackForm({
      ...trackForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // prevent form submission from refreshing browser
    e.preventDefault();
    // set props.updateTrack using trackForm state and track's id
    props.updateTrack(trackForm, props.id);
    // set props.setUpdate back to original falsy value
    props.setUpdate(false);
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
            <UpdateDropdown
              disabled={!props.user}
              user={props.user}
              trackGenre={trackForm.genre}
              handleChange={handleChange}
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

  const updateFormDisable = () => {
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
              className="update-input-disable"
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
              className="update-input-disable"
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
              className="update-input-disable"
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
              className="update-input-disable"
            />
          </label>
          <br />
          <label>
            <UpdateDropdown
              disabled={!props.user}
              user={props.user}
              trackGenre={trackForm.genre}
              handleChange={handleChange}
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
              className="update-input-disable"
            />
          </label>
          <br />
          <input
            type="submit"
            value="Submit Changes"
            className="update-submit-disable"
            disabled={!props.user}
          />
          <div className="please-login">login to make changes</div>
        </form>
      </div>
    );
  };
  // if there is a user present, show updateFormUser();
  // otherwise, show updateFormDisable();
  return props.user ? updateFormUser() : updateFormDisable();
}

export default UpdateForm;
