import { useState } from 'react';
import './App.css'
import FilterProductTable from './components/FilterProductTable'
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar'

const products = [
  { id: 1, name: "Tennis", price: 99.9, type: 1 },
  { id: 2, name: "Badminton", price: 59.9, type: 1 },
  { id: 3, name: "Basketball", price: -100, type: 1 },

  { id: 4, name: "Iphone 5", price: 99.9, type: 2 },
  { id: 5, name: "Nexus 7", price: 399.9, type: 2 },
  { id: 6, name: "IPod Touch", price: 199.9, type: 2 },

  { id: 7, name: "Mac", price: 199.9, type: 3 },
  { id: 8, name: "And", price: 919.9, type: 3 },
  { id: 9, name: "Cheese", price: 999.9, type: 3 },
];

const headers = ["Sporting Goods", "Electronics", "Foods"];

function App() {
  const [query, setQuery] = useState("Default Value");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase(0)));

  return (
  <FilterProductTable>
    <SearchBar query={query} setQuery={setQuery}/>
    
    <ProductTable headers={headers} products={filteredProducts} />
  </FilterProductTable>
  );
}

export default App;