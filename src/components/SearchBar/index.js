import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
