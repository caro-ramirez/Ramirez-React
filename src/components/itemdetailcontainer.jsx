import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock'; // Asegúrate de tener la función getProductById en asyncMock.js

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
      });
  }, [itemId]);

  return (
    <div>
      {/* Aquí mostrarías el detalle del producto */}
    </div>
  );
}

export default ItemDetailContainer;