function Tracks(props) {
  const tracks = props.tracks;

  const loaded = () => {
    return tracks.map((track) => (
      <div key={track._id} className="ind-track">
        <h2>{track.title}</h2>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="tracks-component">
      {props.tracks ? loaded() : loading()}
    </div>
  );
}

export default Tracks;
