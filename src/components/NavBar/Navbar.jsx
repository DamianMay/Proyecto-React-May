import "./navbar.css"
import CartWidget from "./CartWidget"
import logo from "../../assets/logo-sin-fondo.webp"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} width={120} alt="" />
            </div>

            <ul className="lista">
                <li>NUESTRO CAFÉ</li>
                <li>MAQUINA DE CAFÉ</li>
                <li>EQUIPAMIENTOS</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default Navbar