import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailContainer = ({detalle}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();

    useEffect(() => {
        setLoading(true); // Comienza la carga
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === parseInt(idProduct));
                setProduct(findProduct);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false); // Termina la carga
                console.log("finalizo la promesa");
            });
    }, [idProduct]);

    return (
        <div>
            <h1>{detalle}</h1>

            {loading ? <Loading /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
