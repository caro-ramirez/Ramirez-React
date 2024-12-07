import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget d-flex align-items-center px-3">
      <i className="bi bi-cart-fill me-2"></i>
      {totalQuantity() > 0 && ( // Mostrar la cantidad solo si hay productos en el carrito
        <span className="badge bg-danger rounded-pill">
          {totalQuantity()}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;