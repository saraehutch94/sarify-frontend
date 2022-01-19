import { useState } from "react";

function CreateTrack(props) {
  return (
    <div className="create-track">
      <h2>Create a Track</h2>
      <h2>Add a Track:</h2>
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
