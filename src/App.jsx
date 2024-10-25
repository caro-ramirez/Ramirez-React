import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Descubre los mejores productos para tu cabello!" /> 
    </div>
  );
}

export default   
 App;