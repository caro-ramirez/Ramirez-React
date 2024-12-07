// CartContext.jsx
import { createContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase.js"; // Importa tu configuración de Firebase
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore"; // Importa las funciones de Firestore

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Obtener carrito de localStorage al iniciar
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartFromStorage);
  }, []);

  // Guardar carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const createOrder = async (buyer) => {
    const objOrder = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: new Date(),
    };

    // Obtener los productos del carrito desde Firestore
    const batch = writeBatch(db);
    const outOfStock = [];
    const ids = cart.map((prod) => prod.id);
    const productsRef = collection(db, "items");
    const productsAddedFromFirestore = await getDocs(
      query(productsRef, where(documentId(), "in", ids))
    );
    const { docs } = productsAddedFromFirestore;

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prodQuantity = cart.find((prod) => prod.id === doc.id)?.quantity;

      if (dataDoc.stock >= prodQuantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();

      // Agregar la orden a Firestore
      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);

      clearCart();
      alert(`Su orden fue creada con el ID: ${orderAdded.id}`);
    } else {
      alert("Hay productos que estan fuera de stock");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalPrice,
        totalQuantity,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};