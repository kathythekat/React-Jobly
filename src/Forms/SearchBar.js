import { useState } from "react";

function SearchBar({ addSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
    if (searchInput.length >= 2) {
      addSearchTerm(searchInput.toUpperCase());
    }
    if (searchInput.length < 2) {
      addSearchTerm("");
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addSearchTerm(searchInput);
  //   setSearchInput("");
  // }

  return (
    <form className="my-2 d-flex">
      <div className="w-100 form-group mb-2 col-lg-6">
        <input
          type="text"
          className="form-control"
          id="search"
          name="searchTerm"
          value={searchInput}
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </div> */}
    </form>
  );
}

export default SearchBar;
