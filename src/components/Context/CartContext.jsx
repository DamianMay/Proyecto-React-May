import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newProduct, quantityToAdd) => {

        const existingProductIndex = cart.findIndex(
            (productCart) => productCart.id === newProduct.id
        );

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];

            const existingProduct = updatedCart[existingProductIndex];
            if (existingProduct.quantity + quantityToAdd <= newProduct.stock) {
                updatedCart[existingProductIndex].quantity += quantityToAdd;
                setCart(updatedCart);
                Swal.fire({
                    title: "¡Artículo agregado!",
                    text: `Ya tenias previamente este articulo en tu carrito, se suman ${quantityToAdd} a tu stock`,
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Cantidad no disponible",
                    text: "Lo sentimos, no tenemos suficiente stock para la cantidad solicitada.",
                });
            }
        } else {
            if (quantityToAdd <= newProduct.stock) {
                setCart([...cart, { ...newProduct, quantity: quantityToAdd }]);
                Swal.fire({
                    title: "¡Artículo agregado!",
                    text: `Has agregado una cantidad de ${quantityToAdd} unidades al carrito.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Cantidad no disponible",
                    text: "Lo sentimos, no tenemos suficiente stock para la cantidad solicitada.",
                    footer: '<a href="#">Volver al catálogo</a>'
                });
            }
        }
    };

    const totalQuantity = () => {
        const quantity = cart.reduce(
            (total, productCart) => total + productCart.quantity,0);
        return quantity;
    };

    const totalPrice = () => {
        const price = cart.reduce(
            (total, productCart) => total + productCart.quantity * productCart.price,0);
        return price.toLocaleString('es-AR');
    };

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter(
            (productCart) => productCart.id !== idProduct);
        setCart(filterProducts);
    };

    const deleteCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addProductInCart,
                totalQuantity,
                totalPrice,
                deleteProductById,
                deleteCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
