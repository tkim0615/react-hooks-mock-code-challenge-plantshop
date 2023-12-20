import React from "react";
//create state for search input, set value to state..
//add onChange to set state of input value...
//using state, filter out plants state with name search state holds..replcae
//filtered array with current plants sent down to plantList component.
function Search({onHandleSearch, searchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={onHandleSearch}
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
      />
    </div>
  );
}

export default Search;
