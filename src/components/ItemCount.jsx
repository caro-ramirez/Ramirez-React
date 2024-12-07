import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center"> {/* Alinea los elementos horizontalmente */}
      <div className="input-group"> {/* Usa input-group para el contador */}
        <button className="btn btn-outline-secondary" onClick={handleDecrement}>
          -
        </button>
        <span className="form-control text-center">{count}</span> {/* Centra el número */}
        <button className="btn btn-outline-secondary" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="btn btn-success ms-3" onClick={() => onAdd(count)}> {/* Agrega un margen izquierdo */}
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;