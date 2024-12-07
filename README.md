# Peluquería Cozzi - E-commerce

Este proyecto es una aplicación web de e-commerce para la peluquería "Pelu Cozzi", desarrollada con React, Vite y Firebase. Permite a los usuarios navegar por los productos, ver los detalles de cada producto, agregarlos al carrito y realizar una compra.

## Funcionalidades

* **Navegación por categorías:** Los usuarios pueden navegar por las diferentes categorías de productos (shampoo, acondicionador, tratamiento, accesorios).
* **Detalle del producto:**  Los usuarios pueden ver la información detallada de cada producto, incluyendo la imagen, el nombre, el precio y la descripción.
* **Carrito de compras:** Los usuarios pueden agregar productos al carrito, actualizar la cantidad y eliminar productos.
* **Checkout:** Los usuarios pueden finalizar la compra ingresando sus datos en un formulario y enviando la orden a Firestore.
* **Persistencia del carrito:** El carrito de compras se guarda en `localStorage` para que los productos se mantengan en el carrito aunque el usuario cierre la página.

## Tecnologías utilizadas

* **React:** Librería de JavaScript para construir interfaces de usuario.
* **Vite:** Herramienta de construcción de frontend rápida y moderna.
* **Firebase:** Plataforma de desarrollo de Google que proporciona servicios de base de datos (Firestore), autenticación, hosting, etc.
* **React Router DOM:** Librería para manejar el enrutamiento en aplicaciones React.
* **Bootstrap:** Framework CSS para el diseño responsivo.

## Estructura del proyecto

* **`src/components`:** Contiene los componentes de la aplicación (NavBar, ItemListContainer, ItemDetailContainer, etc.).
* **`src/asyncMock.jsx`:**  Contiene los datos de los productos y las funciones para simular la obtención de datos de una API.
* **`src/CartContext.jsx`:**  Contiene el contexto del carrito de compras.
* **`src/firebase.js`:**  Contiene la configuración de Firebase.

## Instalación

1. Clonar el repositorio: `git clone https://github.com/caro-ramirez/Ramirez-React.git`
2. Instalar las dependencias: `npm install`
3. Configurar Firebase: Crear un proyecto en Firebase y agregar la configuración en `src/firebase.js`.
4. Iniciar la aplicación: `npm run dev`

## Despliegue

La aplicación está desplegada en GitHub Pages: [https://caro-ramirez.github.io/Ramirez-React/](https://caro-ramirez.github.io/Ramirez-React/)

## Próximos pasos

* Implementar la autenticación de usuarios con Firebase.
* Agregar más funcionalidades al carrito de compras (editar productos, aplicar cupones, etc.).
* Mejorar el diseño y la experiencia de usuario.
* Agregar pruebas unitarias y de integración.