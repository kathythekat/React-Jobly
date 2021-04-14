import { useState } from "react";

function SearchBar({addSearchTerm}) {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSearchTerm(formData)
    setFormData("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="search"
          name="searchTerm"
          value={formData.searchTerm}
          placeholder="Enter a search term"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
