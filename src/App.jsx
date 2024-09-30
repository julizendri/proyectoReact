import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import Error from './pages/Error';
import DetalleProducto from './pages/DetalleProducto';
import { CategoriasProducto } from './pages/CategoriasProductos';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='productos' element={<Productos />} />
            <Route path='productos/:categoriaID' element={<CategoriasProducto />} />
            <Route path='productos/:categoriaID/:productoID' element={<DetalleProducto />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='*' element={<Error />}></Route>
          </Routes>
          <footer>
            <Footer />
          </footer>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
