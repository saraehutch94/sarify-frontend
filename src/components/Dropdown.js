function Dropdown(props) {
  const handleChange = (e) => {
    props.setGenre(e.target.value);
  };

  return (
    <div className="dropdown-menu">
      <label htmlFor="genre">Select Genre:</label>
      <select name="genre" id="genre" onChange={handleChange}>
        <option select="true" value="All">
          All Genres
        </option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="R&B">R&B</option>
        <option value="Alternative">Alternative</option>
        <option value="Electronic">Electronic</option>
      </select>
    </div>
  );
}

export default Dropdown;
