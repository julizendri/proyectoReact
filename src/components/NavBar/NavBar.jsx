import './NavBar.css'
import { CartWidget } from "./components/CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className="ulLogo">
                <h3 className="logo">KAIA</h3>
            </Link>
            <div className="ulPages">
                <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                <NavLink to='Productos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
}