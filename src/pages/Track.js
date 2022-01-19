import { useState, useEffect } from "react";

function Track(props) {
  const id = props.match.params.id;
  // const foundTrack = props.tracks.find((track) => track._id === id);

  const [trackForm, setTrackForm] = useState();
  const [showPage, setShowPage] = useState();

  const handleChange = (e) => {
    setTrackForm({
      ...trackForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateTrack(trackForm, id);
    setShowPage(trackForm);
  };

  const handleDelete = () => {
    props.deleteTrack(id);
    props.history.push("/sarify/tracks");
  };

  const loading = () => {
    return <h1>Track loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="ind-track">
        <img
          src={showPage.coverArt}
          alt={showPage.project}
          style={{ height: "200px", width: "200px" }}
        />
        <h2>{showPage.title}</h2>
        <h3>{showPage.artist}</h3>
        <p>Project: {showPage.project}</p>
        <p>Genre: {showPage.genre}</p>
        <button onClick={handleDelete}>Delete Track</button>
        <h2>Update Track:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={trackForm.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="artist"
              value={trackForm.artist}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="coverArt"
              value={trackForm.coverArt}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="project"
              value={trackForm.project}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="genre"
              value={trackForm.genre}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Update Track" />
        </form>
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.URL + id);
      const data = await response.json();
      setShowPage(data);
      setTrackForm(data);
    }
    fetchData();
  }, [props.URL, id]);

  return (
    <div className="track">
      {!showPage || !trackForm ? loading() : loaded()}
    </div>
  );

  //   return (
  //       <div className="ind-track">
  //         <img
  //           src={foundTrack.coverArt}
  //           alt={foundTrack.project}
  //           style={{ height: "200px", width: "200px" }}
  //         />
  //         <h2>{foundTrack.title}</h2>
  //         <h3>{foundTrack.artist}</h3>
  //         <p>Project: {foundTrack.project}</p>
  //         <p>Genre: {foundTrack.genre}</p>
  //         <button onClick={handleDelete}>Delete Track</button>
  //         <h2>Update Track:</h2>
  //         <form onSubmit={handleSubmit}>
  //           <label>
  //             <input
  //               type="text"
  //               name="title"
  //               value={trackForm.title}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <br />
  //           <label>
  //             <input
  //               type="text"
  //               name="artist"
  //               value={trackForm.artist}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <br />
  //           <label>
  //             <input
  //               type="text"
  //               name="coverArt"
  //               value={trackForm.coverArt}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <br />
  //           <label>
  //             <input
  //               type="text"
  //               name="project"
  //               value={trackForm.project}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <br />
  //           <label>
  //             <input
  //               type="text"
  //               name="genre"
  //               value={trackForm.genre}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <br />
  //           <input type="submit" value="Update Track" />
  //         </form>
  //       </div>
  //     );
}

export default Track;
