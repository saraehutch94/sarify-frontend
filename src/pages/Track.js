function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.find((track) => track._id === id);
  return (
    <div className="ind-track">
      <img
        src={foundTrack.coverArt}
        alt={foundTrack.project}
        style={{ height: "200px", width: "200px" }}
      />
      <h2>{foundTrack.title}</h2>
      <h3>{foundTrack.artist}</h3>
      <p>Project: {foundTrack.project}</p>
      <p>Genre: {foundTrack.genre}</p>
    </div>
  );
}

export default Track;
