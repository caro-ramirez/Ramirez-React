import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container" style={{ border: '2px solid #ccc', padding: '20px', margin: '20px' }}>
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;