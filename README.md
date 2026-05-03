# React + Vite


🍕 Pizzería Mamma Mía

Proyecto desarrollado en React como parte del desafío de introducción.  
Consiste en una aplicación que muestra distintas pizzas con sus ingredientes y precios.

 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 CSS


Estructura general:

src/
│── assets/          # Imágenes (pizzas y header)
│── App.jsx          # Componente principal
│── Navbar.jsx       # Barra de navegación
│── Header.jsx       # Encabezado con imagen
│── Home.jsx         # Vista principal
│── CardPizza.jsx    # Tarjetas de pizzas
│── Footer.jsx       # Pie de página
│── App.css          # Estilos
│── index.css        # Estilos globales


Este proyecto es parte de un desafío académico y no incluye funcionalidades reales como autenticación o carrito.

HITO 2:
Se agrega el register y el login

HITO 3:
Carrito de compras En este hito se implementa la lógica de un carrito de compras dinámico utilizando React.

HITO 4:
Consumo de API con React. En este hito se implementó la conexión entre el frontend y un backend mediante el consumo de una API REST.
Se utilizó fetch junto con los hooks useState y useEffect para obtener y manejar datos dinámicos desde el servidor.

HITO 5: Integración completa Frontend + Backend

Funcionalidades implementadas

* Consumo de API REST desde el frontend usando `fetch`
* Obtención dinámica de pizzas desde: http://localhost:5000/api/pizzas
* Renderizado dinámico de las pizzas en la vista Home
* Manejo de errores con `try/catch`
* Uso de `useEffect` y `useState` para control de datos
* Implementación de fallback en imágenes (`onError`) en caso de fallo de carga

Consideraciones
El backend debe estar corriendo en localhost:5000 para que el frontend funcione correctamente
En caso de fallo de imágenes externas, se utiliza una imagen de respaldo local  (si bien lo correcto hubiese sido una imágen por tipo de pizza, dejé una sola para todos los casos)

HITO 6: Manejo de estado global con Context API

En este hito se implementa la gestión del carrito de compras utilizando Context API de React, permitiendo compartir el estado global entre distintos componentes de la aplicación.

🔹 Funcionalidades implementadas
Creación de CartContext para manejar el estado global del carrito
Uso de useContext en los siguientes componentes:
Navbar
CardPizza
Cart

Implementación de funciones:
➕ Agregar productos al carrito
➕ Incrementar cantidad
➖ Disminuir cantidad
 Eliminar productos cuando su cantidad llega a 0
