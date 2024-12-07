import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/Checkout"; // Asegúrate de importar tu componente Checkout

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="¡Descubre los mejores productos para tu cabello!"
              />
            }
          />
          <Route
            path="/products"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Categoría" />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Checkout />} /> {/* Ruta para el checkout */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;