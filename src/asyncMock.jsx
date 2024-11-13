const products = [
  {
    id: "1",
    name: "Shampoo Hidratante",
    price: 1200,
    category: "shampoo",
    img: "./src/assets/shampoo.jpg", 
    description: "Shampoo hidratante para cabellos secos y dañados.",
  },
  {
    id: "2",
    name: "Acondicionador Nutritivo",
    price: 1500,
    category: "acondicionador",
    img: "./src/assets/conditioner.jpg",
    description: "Acondicionador nutritivo para cabellos con frizz.",
  },
  {
    id: "3",
    name: "Mascarilla Reparadora",
    price: 2000,
    category: "tratamiento",
    img: "./src/assets/mascarillareparadora.jpg",
    description: "Mascarilla capilar reparadora para cabellos quebradizos.",
  },
  {
    id: "4",
    name: "Cepillo Desenredante",
    price: 800,
    category: "accesorios",
    img: "./src/assets/cepillo.png",
    description: "Cepillo desenredante para todo tipo de cabello.",
  },
  {
    id: "5",
    name: "Secador de Pelo Profesional",
    price: 10000,
    category: "accesorios",
    img: "./src/assets/secador.png",
    description: "Secador de pelo profesional con tecnología iónica.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); 
  });
};

export const getProductsByCategory = (categoryId) => {
  console.log("Filtrando productos por categoría:", categoryId); 
  return new Promise((resolve) => {
    setTimeout(() => {
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