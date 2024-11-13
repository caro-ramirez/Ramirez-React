import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";
import ItemDetailContainer from "./components/itemdetailcontainer";
import { CartProvider } from "./components/CartContext"; 

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Descubre los mejores productos para tu cabello!" />
            }
            />
          <Route path="/products" element={<ItemListContainer greeting="Productos" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;