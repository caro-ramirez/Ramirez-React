import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { CartContext } from "../CartContext";
import ItemDetail from "./ItemDetail"; // Importa el componente ItemDetail

function ItemDetailContainer() {
  // ... (código para obtener el producto) ...

  const handleAddToCart = (product) => {
    addItem(product, 1); // Puedes obtener la cantidad del ItemQuantitySelector aquí
  };

  return (
    <div className="container my-5">
      <ItemDetail product={product} onAddToCart={handleAddToCart} /> {/* Pasa la función handleAddToCart como prop */}
    </div>
  );
}

export default ItemDetailContainer;