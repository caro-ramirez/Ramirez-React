import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { CartContext } from "./CartContext"; 
import Item from "./Item"; 

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [itemId]);

  if (!product) {
    return <div>Cargando producto...</div>;
  }

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <img src={product.img} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="lead">${product.price}</p>
        <p>{product.description}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
  );
}

export default ItemDetailContainer;