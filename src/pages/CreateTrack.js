import { useState } from "react";
import "./CreateTrack.css";

function CreateTrack(props) {
  // set formState initial state to track properties w/ empty values
  // besides Genre string for dropdown menu value
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
    coverArt: "",
    project: "",
    genre: "Genre",
    duration: "",
  });

  const handleChange = (e) => {
    // when form changes, set setFormState to initial formState
    // plus specific input's name as property and input's value as object property value
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // prevent form submission from refreshing browser
    e.preventDefault();
    // set props.createTrack to formState state
    props.createTrack(formState);
    // re-set formState to empty strings
    // besides Genre string for dropdown menu value
    setFormState({
      title: "",
      artist: "",
      coverArt: "",
      project: "",
      genre: "Genre",
    });
    // redirect back to Tracks page component
    props.history.push("/sarify/tracks");
  };

  return (
    <div className="create-track">
      <div className="create-track-title">add track</div>
      <div className="image-and-form">
        {/* below: if formState coverArt property includes "jpg", "jpeg", or "png"
        show image in create-coverArt div
        otherwise, don't show image in create-coverArt div */}
        {["jpg", "jpeg", "png"].some((files) =>
          formState.coverArt.includes(files)
        ) ? (
          <div
            className="create-coverArt"
            style={{
              backgroundImage: `url(${formState.coverArt})`,
              backgroundSize: "cover",
            }}
          ></div>
        ) : (
          <div
            className="create-coverArt"
            style={{
              color: "white",
              background: "black",
            }}
          >
            <div className="image-file">jpg</div>
            <div className="image-file">jpeg</div>
            <div className="image-file">png</div>
          </div>
        )}
        <form className="create-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleChange}
              placeholder="Title (+ feature)"
              className="create-form-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="artist"
              value={formState.artist}
              onChange={handleChange}
              placeholder="Artist"
              className="create-form-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="coverArt"
              value={formState.coverArt}
              onChange={handleChange}
              placeholder="Cover Art"
              className="create-form-input"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="project"
              value={formState.project}
              onChange={handleChange}
              placeholder="Project/Album"
              className="create-form-input"
            />
          </label>
          <br />
          <label>
            <select
              name="genre"
              className="create-form-input create-dropdown"
              value={formState.genre}
              onChange={handleChange}
            >
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="R&B">R&B</option>
              <option value="Alternative">Alternative</option>
              <option value="Electronic">Electronic</option>
            </select>
          </label>
          <br />
          <label>
            <input
              type="text"
              name="duration"
              value={formState.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="create-form-input"
            />
          </label>
          <br />
          <div className="create-form-submit-wrapper">
            {/* if formState coverArt property includes "jpg", "jpeg", or "png"
        allow visitor to submit track
        otherwise, disable form submission button */}
            {!["jpg", "jpeg", "png"].some((files) =>
              formState.coverArt.includes(files)
            ) ? (
              <input
                disabled={true}
                type="submit"
                value="add track"
                className="create-form-submit-disable"
              />
            ) : (
              <input
                type="submit"
                value="add track"
                className="create-form-submit"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTrack;
