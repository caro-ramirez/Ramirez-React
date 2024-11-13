// src/asyncMock.js

const products = [
    {
      id: '1',
      name: 'Shampoo Hidratante',
      price: 1200,
      category: 'shampoo',
      img: '/images/shampoo-hidratante.jpg', 
      description: 'Shampoo hidratante para cabellos secos y dañados.'
    },
    {
      id: '2',
      name: 'Acondicionador Nutritivo',
      price: 1500,
      category: 'acondicionador',
      img: '/images/acondicionador-nutritivo.jpg',
      description: 'Acondicionador nutritivo para cabellos con frizz.'
    },
    {
      id: '3',
      name: 'Mascarilla Reparadora',
      price: 2000,
      category: 'tratamiento',
      img: '/images/mascarilla-reparadora.jpg',
      description: 'Mascarilla capilar reparadora para cabellos quebradizos.'
    },
    {
      id: '4',
      name: 'Cepillo Desenredante',
      price: 800,
      category: 'accesorios',
      img: '/images/cepillo-desenredante.jpg',
      description: 'Cepillo desenredante para todo tipo de cabello.'
    },
    {
      id: '5',
      name: 'Secador de Pelo Profesional',
      price: 10000,
      category: 'accesorios',
      img: '/images/secador-profesional.jpg',
      description: 'Secador de pelo profesional con tecnología iónica.'
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500); // Simula un retraso de 500ms
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