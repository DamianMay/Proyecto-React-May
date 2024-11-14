import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "./cart.css"
import { Link } from "react-router-dom"
import CartEmpty from "./CartEmpty"

const Cart = () => {
    const {cart, totalPrice,deleteProductById, deleteCart} = useContext(CartContext)
    if(cart.length ===0){
        return(
            <CartEmpty />
        )
    }
    return (
    <div className="div-products">
        <h2>Productos en el carrito</h2>
        {
            cart.map((productCart)=> (
                <div key={productCart.id} className="product">
                    <img src={productCart.image[0]} className="image-product" alt="" />
                    <p className="product-name">{productCart.name}</p>
                    <p className="product-quantity">Cantidad: {productCart.quantity}</p>
                    <p className="product-total">Total: $ {productCart.quantity * productCart.price.toLocaleString('es-AR')}</p>
                    <button className="button-product" onClick={() => deleteProductById(productCart.id)}>X</button>
                </div>
            ))
        }
        <div className="products-delate-total">
            <button className="button-delate" onClick={deleteCart}>Borrar todo</button>
            <p className="total-products">Precio total: ${totalPrice()}</p>
            <Link to="/checkout" className="button-finish">Finalizar compra</Link>
        </div>
    </div>
    )
}

export default Cart


