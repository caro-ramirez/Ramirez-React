const products = [
    // ... tus datos de productos ...
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(product => product.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };
  
  export const getProductById = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(product => product.id === itemId);
        resolve(product);
      }, 500);
    });
  };