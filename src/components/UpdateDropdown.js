function UpdateDropdown(props) {
  const updateDropdownUser = () => {
    return (
      <select
        className="update-input update-dropdown"
        name="genre"
        value={props.trackGenre}
        onChange={props.handleChange}
        disabled={!props.user}
      >
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="R&B">R&B</option>
        <option value="Alternative">Alternative</option>
        <option value="Electronic">Electronic</option>
      </select>
    );
  };

  const updateDropdownDisable = () => {
    return (
      <select
        className="update-input-disable update-dropdown"
        name="genre"
        value={props.trackGenre}
        onChange={props.handleChange}
        disabled
      >
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="R&B">R&B</option>
        <option value="Alternative">Alternative</option>
        <option value="Electronic">Electronic</option>
      </select>
    );
  };

  return props.user ? updateDropdownUser() : updateDropdownDisable();
}
export default UpdateDropdown;
