import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);

    const handCliclResest = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="item-count-container">
            <div className="button-container">
                <button className="button" onClick={handCliclResest}>-</button>
                <p className="count">{count}</p>
                <button className="button" onClick={handleClickAdd}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={() => addProduct(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;


// seguir minuto 40 clase 24/10