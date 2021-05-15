import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div>
      <form className="form-Inline">
        <input
          className="form-control"
          type="search"
          aria-label="search"
          placeholder="Search"
          onChange={(event) => handleSearchChange}
        />
      </form>
    </div>
  );
}

export default Search;
