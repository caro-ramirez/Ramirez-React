import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMock";
import Item from "./Item";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (greeting === "Productos") {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    } else if (greeting === "Categoría") { 
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);        
        })
        .catch((error) => {
          console.error("Error al obtener los productos por categoría:", error);
        });
    }
  }, [greeting, categoryId]);

  console.log(products); 

  if (greeting === "¡Descubre los mejores productos para tu cabello!") {
    return (
      <div>
        <img src="/ruta/a/tu/imagen.jpg" alt="Imagen de inicio" />
        <h1>Título de inicio</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {/* ... */}
      {products.length === 0 && greeting === "Categoría" && (
        <p>No hay productos en esta categoría.</p>
      )}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default ItemListContainer;