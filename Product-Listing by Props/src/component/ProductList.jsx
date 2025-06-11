import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ items, handleAddToCart }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
  <ProductCard 
    key={product.id}
    {...product}
    addToCart={() => handleAddToCart(product)}
  />
))}
    
    </div>
  );
}

export default ProductList;
