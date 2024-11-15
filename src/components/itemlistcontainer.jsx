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
        <img src="../../src/assets/pelu2.png" alt="Peluqueria Cozzi" />
        <h1>Pablo Cozzi, tu peluqueria</h1>
      </div>
    );
  }

  return (
    <div>
        <ProductFilter onCategoryChange={handleCategoryChange} />
        <div className="container">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <Item product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default ItemListContainer;