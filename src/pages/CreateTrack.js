import { useState } from "react";
import "./CreateTrack.css";

function CreateTrack(props) {
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
    coverArt: "",
    project: "",
    genre: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTrack(formState);
    setFormState({
      title: "",
      artist: "",
      coverArt: "",
      project: "",
      genre: "",
    });
    props.history.push("/sarify/tracks");
  };

  return (
    <div className="create-track">
      <div className="create-track-title">Create a Track</div>
      {["jpg", "jpeg", "png"].some((files) =>
        formState.coverArt.includes(files)
      ) ? (
        <div
          className="create-coverArt"
          style={{
            background: `url(${formState.coverArt})`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
      ) : (
        <div
          className="create-coverArt"
          style={{
            color: "white",
            background: "black",
            height: "200px",
            width: "200px",
            borderRadius: "10%",
          }}
        >
          Cover Art will appear here
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Title"
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
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="genre"
            value={formState.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="duration"
            value={formState.duration}
            onChange={handleChange}
            placeholder="Duration"
          />
        </label>
        <br />
        <input
          disabled={
            !["jpg", "jpeg", "png"].some((files) =>
              formState.coverArt.includes(files)
            )
          }
          type="submit"
          value="Add Track"
        />
      </form>
    </div>
  );
}

export default CreateTrack;
