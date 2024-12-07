import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";


function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const result = await getProductById(itemId);
        if (result) {
          setProduct(result);
        } else {
          setError("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
  };

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container my-5">
      <ItemDetail product={product} />
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetailContainer;