import React from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "./AddItemButton";

function ItemDetail({ product, onAddToCart }) {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.img} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="lead">${product.price}</p>
        <Description text={product.description} />
        <ItemQuantitySelector />
        <AddItemButton product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}

export default ItemDetail;