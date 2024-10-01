import React from 'react';

const SearchBar = ({ query, setQuery, stockChecked, setStockChecked }) => {
  return (
  <div>
    <input 
    type="text" 
    value={query} 
    onChange={(e) => setQuery(e.target.value)}/>
  <div>
    <input type="checkbox" checked={stockChecked} onChange={(e) => console.log(e.target.checked)}/>
    Only show products in stock
    </div>
    </div>
  );
};

export default SearchBar;
