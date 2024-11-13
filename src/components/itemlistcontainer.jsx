import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../asyncMock";
import Item from "./Item";
import ProductFilter from "./ProductFilter"; // Importa el componente ProductFilter

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Agrega un estado para los productos filtrados
  const { categoryId } = useParams();

  useEffect(() => {
    // Si la ruta es /products, cargar los productos de la categoría "productos"
    if (greeting === "productos") {
      getProductsByCategory("productos")
        .then((response) => {
          setProducts(response);
          setFilteredProducts(response); // Inicializa los productos filtrados con todos los productos
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    }
  }, [greeting]);

  const handleCategoryChange = (category) => {
    // Filtrar los productos en base a la categoría seleccionada
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;
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

  // Mostrar la lista de productos (filtrados) en la ruta /products
  return (
    <div>
      <ProductFilter onCategoryChange={handleCategoryChange} /> {/* Agrega el componente ProductFilter */}
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;