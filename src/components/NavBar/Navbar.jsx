import React from "react";
import Search from "../Search/Search.jsx";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse row">
          <Search  />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


// handleSearchChange= {handleSearchChange}