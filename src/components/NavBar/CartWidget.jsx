import "./cart-widget.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    const quantity = totalQuantity()
    
    return (
        <Link to='/cart' className="cartWidget">
            <ion-icon name="cart-outline" size="large"></ion-icon>
            <p>{ quantity >=1 && quantity}</p>
        </Link>
        
    )
}

export default CartWidget