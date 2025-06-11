import React from 'react'

function ProductCard({image, title, price, rating, addToCart}) {
  return (
     <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price}</p>
      <p className="product-rating">⭐ {rating}</p>
      <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>
  )
}

export default ProductCard