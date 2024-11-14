import { Link } from "react-router-dom"
import "./cartEmpty.css"

const CartEmpty = () => {
    return (
        <div className="cart-empty-container">
            <h2>Vemos que todabia no seleccionaste tu cafe...☕</h2>
            <Link to="/Proyecto-React-May">Quiero comprar YA</Link>
        </div>
    )
}

export default CartEmpty