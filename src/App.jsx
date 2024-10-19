import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { CategoriasProductos } from './pages/CategoriasProductos';
import { DetalleProductos } from './pages/DetalleProductos';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Error } from './pages/Error';
import { CartProvider } from './context/CartContext';
import { ConfirmationPage } from './pages/ConfirmationPage';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <header>
                        <NavBar />
                    </header>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='productos' element={<Productos />} />
                        <Route path='productos/:categoriaId' element={<CategoriasProductos />} />
                        <Route path='productos/:categoriaId/:id' element={<DetalleProductos />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='checkout' element={<Checkout />} />
                        <Route path='*' element={<Error />}></Route>
                        <Route path='confirmation' element={<ConfirmationPage />}></Route>
                    </Routes>
                    <footer>
                        <Footer />
                    </footer>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;