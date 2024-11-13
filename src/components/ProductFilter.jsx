import React, { useState } from "react";

function ProductFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <button onClick={() => handleCategoryChange(null)}>Todas</button>
      <button onClick={() => handleCategoryChange("shampoo")}>Shampoo</button>
      <button onClick={() => handleCategoryChange("acondicionador")}>
        Acondicionador
      </button>
      <button onClick={() => handleCategoryChange("tratamiento")}>
        Tratamiento
      </button>
      <button onClick={() => handleCategoryChange("accesorios")}>
        Accesorios
      </button>
    </div>
  );
}

export default ProductFilter;