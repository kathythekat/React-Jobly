import { useState } from "react";

function SearchBar({ addSearchTerm }) {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSearchTerm(formData);
    setFormData("");
  }

  return (
    <form className="my-2 d-flex" onSubmit={handleSubmit}>
      <div className="form-group mb-2 col-md-5">
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
      <div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
