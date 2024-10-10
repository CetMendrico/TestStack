import { useEffect, useState } from 'react';
import './App.css'
import FilterProductTable from './components/FilterProductTable'
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar'

const products = [
  { id: 1, name: "Tennis", price: 99.9, type: 1, stock: 100 },
  { id: 2, name: "Badminton", price: 59.9, type: 1, stock: 1 },
  { id: 3, name: "Basketball", price: -100, type: 1, stock: 10 },

  { id: 4, name: "Iphone 5", price: 99.9, type: 2, stock: 12 },
  { id: 5, name: "Nexus 7", price: 399.9, type: 2, stock: 11 },
  { id: 6, name: "IPod Touch", price: 199.9, type: 2, stock: 8 },

  { id: 7, name: "Mac", price: 199.9, type: 3, stock: 1 },
  { id: 8, name: "And", price: 919.9, type: 3, stock: 9 },
  { id: 9, name: "Cheese", price: 999.9, type: 3, stock: 7},
];

const headers = ["Sporting Goods", "Electronics", "Foods"];

function App() {
  const [query, setQuery] = useState("Default Value");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(query.toLowerCase(0))
    &&
    (!stockChecked || product.stock > 0)
  );

useEffect(() => {
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
  };

  getProducts();
  return () => {
    
  }
}, [])

  return (
  <FilterProductTable>
    <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked}/>
    
    <ProductTable headers={headers} products={filteredProducts} />
  </FilterProductTable>
  );
}

export default App;