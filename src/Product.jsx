import React from "react";

function Product({ product, onDelete, onIncreasePrice }) {
  return (
    <div className="product-card">
      <div className="product-name">
        {product.name} - <span className="price">${product.price}</span>
      </div>
      <div>
        <button onClick={() => onIncreasePrice(product.id)} className="increase">
          Increase Price
        </button>
        <button onClick={() => onDelete(product.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
