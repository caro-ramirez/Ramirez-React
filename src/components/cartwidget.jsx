import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function CartWidget() {
  return (
    <div className="cart-widget d-flex align-items-center px-3">
      <i className="bi bi-cart-fill me-2"></i> 
      <span className="badge bg-danger rounded-pill">3</span>
    </div>
  );
}

export default CartWidget;