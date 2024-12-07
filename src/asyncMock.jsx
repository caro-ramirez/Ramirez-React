import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.js";

export const getProducts = async () => {
  const productsCollection = collection(db, "productos");
  const productsSnapshot = await getDocs(productsCollection);
  const productList = productsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return productList;
};

export const getProductsByCategory = async (categoryId) => {
  console.log("Filtrando productos por categoría:", categoryId);

  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, where("category", "==", categoryId));
  const productsSnapshot = await getDocs(q);

  const productList = productsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  if (productList.length===0){
    console.log("No se encontraron productos para la categoria:", categoryId);
  }
  return productList;
};

export const getProductById = async (itemId) => {
  const productRef = doc(db, "productos", itemId); 
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    return { id: productSnapshot.id, ...productSnapshot.data() };
  } else {
    console.log("El producto no existe");
    return null; 
  }
};