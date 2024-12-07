import React from "react";

function AddItemButton({ product, onAddToCart }) {
  return (
    <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
      Agregar al carrito
    </button>
  );
}

export default AddItemButton;