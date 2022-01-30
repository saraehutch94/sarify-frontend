import "./Dropdown.css";

function Dropdown(props) {
  const handleChange = (e) => {
    // when dropdown menu (below) value changes, set props.setGenre to that value
    props.setGenre(e.target.value);
  };

  return (
    <div className="dropdown-menu">
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
