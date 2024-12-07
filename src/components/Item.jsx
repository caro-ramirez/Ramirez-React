import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  const { id, name, price, img } = product;

  return (
    <div className="card">
      <div className="text-center"> 
        <img src={product.img} className="card-img-top product-image" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;