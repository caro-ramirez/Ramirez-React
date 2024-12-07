import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 

// ... (tu array de productos products) ...

export const getProducts = async () => {
  const productsCollection = collection(db, 'items'); 
  const productsSnapshot = await getDocs(productsCollection);
  const productList = productsSnapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });
  return productList;
};

export const getProductsByCategory = (categoryId) => {
  console.log("Filtrando productos por categoría:", categoryId); 
  return new Promise((resolve) => {
    setTimeout(() => {
      // Asegúrate de que la propiedad 'category' existe en tus productos
      const filteredProducts = products.filter(
        (product) => product.category === categoryId
      );
      console.log("Productos filtrados:", filteredProducts); 
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === itemId);
      resolve(product);
    }, 500);
  });
};