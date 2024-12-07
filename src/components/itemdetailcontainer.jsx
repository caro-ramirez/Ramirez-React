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
      <div className="row">
        <div className="col-md-6 text-center"> {/* Centrar la imagen */}
          <img src={product.img} alt={product.name} className="img-fluid" /> 
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2> {/* Agregar un margen inferior */}
          <p className="lead fs-3">${product.price}</p> {/* Aumentar el tamaño de la fuente */}
          <p className="my-3">{product.description}</p> {/* Agregar márgenes verticales */}
          <div className="d-flex align-items-center mb-3"> {/* Alinear el contador y el botón */}
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;