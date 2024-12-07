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
    } else if (greeting === "Categoría") {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response);
        })
        .catch((error) => {
          console.error("Error al obtener los productos por categoría:", error);
          // Aquí puedes mostrar un mensaje de error al usuario, por ejemplo:
          alert("No se encontraron productos para esta categoría");
          // O redirigir a otra página
        });
    }
  }, [greeting, categoryId]);

  const handleCategoryChange = (category) => {
    // Filtrar los productos en base a la categoría seleccionada
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products; // Mostrar todos los productos si category es null
    setFilteredProducts(filtered);
  };

  // Mostrar la imagen y el título solo en la página de inicio
  if (greeting === "¡Descubre los mejores productos para tu cabello!") {
    return (
      <div>
        <img src="/ruta/a/tu/imagen.jpg" alt="Imagen de inicio" />{" "}
        {/* Reemplaza con la ruta a tu imagen */}
        <h1>Título de inicio</h1>
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