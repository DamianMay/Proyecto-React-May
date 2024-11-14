import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    return (
        <CartContext.Provider value = {{cart, saludando}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}