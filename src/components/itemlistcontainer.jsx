import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getProducts, getProductsByCategory } from '../asyncMock'; 

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, [categoryId]); 

  return (
    <div>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;