import React, { useState } from "react";

function ProductFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="container my-4">
      <div className="btn-group" role="group" aria-label="Filtrar por categoría">
        <button
          type="button"
          className={`btn ${
            selectedCategory === null ? "btn-primary" : "btn-outline-primary"
          } ${selectedCategory === null ? "active" : ""}`}
          onClick={() => handleCategoryChange(null)}
        >
          Todas
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "shampoo" ? "btn-primary" : "btn-outline-primary"
          } ${selectedCategory === "shampoo" ? "active" : ""}`}
          onClick={() => handleCategoryChange("shampoo")}
        >
          Shampoo
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "acondicionador"
              ? "btn-primary"
              : "btn-outline-primary"
          } ${selectedCategory === "acondicionador" ? "active" : ""}`}
          onClick={() => handleCategoryChange("acondicionador")}
        >
          Acondicionador
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "tratamiento"
              ? "btn-primary"
              : "btn-outline-primary"
          } ${selectedCategory === "tratamiento" ? "active" : ""}`}
          onClick={() => handleCategoryChange("tratamiento")}
        >
          Tratamiento
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "accesorios"
              ? "btn-primary"
              : "btn-outline-primary"
          } ${selectedCategory === "accesorios" ? "active" : ""}`}
          onClick={() => handleCategoryChange("accesorios")}
        >
          Accesorios
        </button>
      </div>
    </div>
  );
}

export default ProductFilter;