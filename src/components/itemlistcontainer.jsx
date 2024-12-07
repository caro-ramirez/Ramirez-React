import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncMock";
import Item from "./Item";
import ProductFilter from "./ProductFilter";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProductsByCategory = (categoryId) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const filteredProducts = products.filter(
            (product) => product.category === categoryId
          );
          if (filteredProducts.length > 0) {
            resolve(filteredProducts);
          } else {
            reject("No se encontraron productos para esta categoría");
          }
        }, 500);
      });
    };

    if (greeting === "Productos") {
      getProducts()
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    } else if (greeting === "category") {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos por categoría:", error);
          alert("No se encontraron productos para esta categoría");
        });
    }
  }, [greeting, categoryId]);

  if (greeting === "¡Descubre los mejores productos para tu cabello!") {
    return (
      <div>
        <img src="./assets/pelu.jpg" alt="Imagen de inicio" />{" "}
        {/* Reemplaza con la ruta a tu imagen */}
        <h1>Tu mejor peluqueria</h1>
      </div>
    );
  }
}

export default ItemListContainer;