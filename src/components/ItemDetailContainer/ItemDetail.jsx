import "./itemDetail.css";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(product.image[0]);
    const images = product.image.filter((image) => image !== currentImage);
    const [isZoomed, setIsZoomed] = useState(false);
    const [showGoCart, setShowGoCart] = useState(false)
    const { addProductInCart } = useContext(CartContext);
    
    const addProduct = (count) => {
        addProductInCart(product, count);
        setShowGoCart(true)
    };

    return (
        <div className="product">
            <div className="images-detail-container">
                <div className="secondary-image">
                    {images.map((image) => (
                        <img
                            src={image}
                            key={image}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
                <div className="main-image">
                    <img
                        src={currentImage}
                        alt=""
                        onMouseEnter={() => setIsZoomed(true)}
                        onMouseLeave={() => setIsZoomed(false)}
                        className={isZoomed ? "zoomed" : ""}
                    />
                </div>
            </div>
            <div className="description-zone">
                <div className="description">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price.toLocaleString('es-AR')}</p>
                </div>
                <ItemCount stock={product.stock} addProduct={addProduct} />
                {
                    showGoCart === true ? (
                        <Link to="/Cart" className="go-cart-link">Ir a mi carrito</Link>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    );
};

export default ItemDetail;


// 35:22 minutos
