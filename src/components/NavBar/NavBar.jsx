import './NavBar.css'
import { CartWidget } from "./components/CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="ulLogo">
                <li className="logo">KAIA</li>
            </ul>
            <ul className="ulPages">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </nav>
    )
}