import React, { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import Item from "./Item";
import ProductFilter from "./ProductFilter";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (window.location.pathname === "/products") {
      getProducts()
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    }
  }, []); 

  const handleCategoryChange = (category) => {
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products; 
    setFilteredProducts(filtered);
  };

  if (greeting === "¡Descubre los mejores productos para tu cabello!") {
    return (
      <div>
        <img src="../src/assets/peluqueria.jpg" alt="Imagen de inicio" />{" "}
        <h1>Pablo Cozzi, tu peluqueria</h1>
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