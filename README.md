# Kaia Tienda Online

¡Bienvenidos a **Kaia Tienda Online**! Este es mi proyecto para la entrega final del curso de **React JS**. El objetivo principal de este proyecto es desarrollar una tienda en línea funcional, donde los usuarios puedan explorar productos, agregarlos al carrito de compras, y realizar pedidos.

## Características del Proyecto

- Navegación entre diferentes categorías de productos.
- Detalle de cada producto con su descripción y precio.
- Funcionalidad de agregar y eliminar productos del carrito de compras.
- Gestión de stock para que los usuarios no puedan agregar más productos de los disponibles.
- Persistencia del carrito utilizando el contexto global (Context API).
- Interacción intuitiva para incrementar y decrementar la cantidad de productos en el carrito.
- Diseño responsive para una mejor experiencia en dispositivos móviles.

## Dependencias Utilizadas

Aparte de las dependencias principales que se vieron en clase, he decidido incluir otras herramientas y bibliotecas que mejoran la funcionalidad y el diseño del proyecto:

### Dependencias Extras

1. **react-icons**:
- **Motivo de la inclusión**: Para mejorar la interfaz visual del proyecto, utilicé la librería `react-icons`, que proporciona una gran variedad de íconos listos para usar. En particular, utilicé el ícono de carrito de compras (`FaShoppingCart`), que le da un toque visual moderno y atractivo a la tienda.

2. **Firebase**:
- **Motivo de la inclusión**: Utilicé Firebase como backend para almacenar los productos y gestionar el stock, como fue sugerido por los profesores. Firebase me permite tener una base de datos en tiempo real de fácil integración con React.

## Estructura del Proyecto

El proyecto sigue una estructura básica de React, con componentes distribuidos en carpetas según su función. A continuación, una breve descripción:

- **src/components**: Contiene todos los componentes reutilizables como el `NavBar`, `CartWidget`, `Footer`, `Shared`, `Contadores` y los componentes de producto como `CartItem`, `CategoriasListContenedor`, `ProductoDetalleContenedor` y `ProductoList`.
- **src/context**: Aquí se encuentra el contexto para el carrito de compras, `CartContext`, que gestiona el estado global del carrito en toda la aplicación.
- **src/pages**: Contiene las páginas principales de la aplicación como `Home`, `ProductDetail`, y `Checkout`.
- **src/firebase**: Configuración e inicialización de Firebase.