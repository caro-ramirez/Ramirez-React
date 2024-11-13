import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncMock";
import Item from "./Item";
import ProductFilter from "./ProductFilter";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (greeting === "Productos") {
      getProducts()
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    }
  }, [greeting]);

  const handleCategoryChange = (category) => {
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;
    setFilteredProducts(filtered);
  };

  if (greeting === "¡Descubre los mejores productos para tu cabello!") {
    return (
      <div>
        {/* Reemplaza con la ruta a tu imagen */}
        <img src="/ruta/a/tu/imagen.jpg" alt="Imagen de inicio" />
        <h1>Título de inicio</h1>
      </div>
    );
  }

  return (
    <div>
      <ProductFilter onCategoryChange={handleCategoryChange} />
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;