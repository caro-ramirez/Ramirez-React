import React from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart" className="cart-widget d-flex align-items-center px-3">
      <i className="bi bi-cart-fill me-2"></i>
      <span className="badge bg-danger rounded-pill">3</span>
    </Link>
  );
}

export default CartWidget;