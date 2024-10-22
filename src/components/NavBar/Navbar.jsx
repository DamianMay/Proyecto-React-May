import "./navbar.css"
import CartWidget from "./CartWidget"
import logo from "../../assets/logo-sin-fondo.webp"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/Proyecto-React-May" className="brand">
                <img src={logo} width={120} alt="" />
            </Link>

            <ul className="lista">
                <li>
                    <Link to="/category/Cafe">NUESTRO CAFÉ</Link>
                </li>
                <li>
                    <Link to="/category/Maquina-de-Cafe">MAQUINA DE CAFÉ</Link>
                </li>
                <li>
                    <Link to="/category/Equipamientos">EQUIPAMIENTOS</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default Navbar