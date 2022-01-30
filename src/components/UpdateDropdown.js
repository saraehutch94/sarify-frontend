function UpdateDropdown(props) {
  return (
    <select name="genre" value={props.trackGenre} onChange={props.handleChange}>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="R&B">R&B</option>
      <option value="Alternative">Alternative</option>
      <option value="Electronic">Electronic</option>
    </select>
  );
}

export default UpdateDropdown;
