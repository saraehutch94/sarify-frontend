import { useState } from "react";

function CreateTrack(props) {
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
    coverArt: "",
    project: "",
    genre: "",
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
      <h1>Create a Track</h1>

      {formState.coverArt.includes("jpg", "png") ? (
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
        <input type="submit" value="Add Track" />
      </form>
    </div>
  );
}

export default CreateTrack;
