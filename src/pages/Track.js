function Track(props) {
  const id = props.match.params.id;
  const foundTrack = props.tracks.find((track) => track._id === id);
  console.log(foundTrack);
  return <h1>Ind. Track Component</h1>;
}

export default Track;
