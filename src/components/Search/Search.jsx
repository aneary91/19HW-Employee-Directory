import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          aria-label="search"
          placeholder="Search"
        //   onChange={event => handleSearchChange(event)}
        />
      </form>
    </div>
  );
}

export default Search;
