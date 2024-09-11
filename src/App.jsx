import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import DetalleProducto from './pages/DetalleProducto';
import { CategoriasProducto } from './pages/CategoriasProductos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='productos' element={<Productos />} />
          <Route path='productos/:categoriaID' element={<CategoriasProducto />} />
          <Route path='productos/:categoriaID/:productoID' element={<DetalleProducto />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
