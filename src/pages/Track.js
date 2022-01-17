function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.filter((track) => track._id === id);
  return <h1>Ind. Track Component</h1>;
}

export default Track;
