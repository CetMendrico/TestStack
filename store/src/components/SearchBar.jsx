import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
  <div>
    <input 
    type="text" 
    value={query} 
    onChange={(e) => setQuery(e.target.value)}/>
  <div>
    <input type="checkbox" />
    Only show products in stock
    </div>
    </div>
  );
};

export default SearchBar;
