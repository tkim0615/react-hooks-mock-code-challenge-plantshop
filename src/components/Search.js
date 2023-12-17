import React from "react";
// make onChange
function Search({onHandleSearchChange, searchText}) {

  const handleChange =(e) =>{
    onHandleSearchChange(e)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Search;
