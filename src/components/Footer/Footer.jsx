import React from "react";
import "./footer.css";
import logo from "../../assets/logo-sin-fondo.webp"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                <Link to="/Proyecto-React-May" className="brand">
                    <img src={logo} width={120} alt="" />
                </Link>
                </div>
                <div className="footer-section">
                    <ul className="footer-list">
                        <h4>Menu</h4>
                        <li>
                            <Link to="/category/Cafe">Nuestro café</Link>
                        </li>
                        <li>
                            <Link to="/category/Maquina-de-Cafe">Maquina de café</Link>
                        </li>
                        <li>
                            <Link to="/category/Equipamientos">Equipamientos</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contáctanos</h4>
                    <p>Teléfono: +54 9 1234 5678</p>
                    <p>Email: contacto@coffeedamianshop.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Coffee Damian Shop - Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
