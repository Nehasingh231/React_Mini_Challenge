import React, { useState } from "react";
import "./App.css";
import ProductList from "./component/ProductList";
import products from "./Data/product";

function App() {
  const [cart, setCart] = useState([])

   const handleAddToCart = (product) => {
      setCart([...cart,product]);
      alert (`${product.title} added to cart❤️`)
   };
   return (
   <div className="app">
   <ProductList items = {products} handleAddToCart={handleAddToCart} />
      <header>Product Listing Page</header>
      <p>Cart:{cart.length} items☺️ </p>
  </div>
   );
}

export default App;
