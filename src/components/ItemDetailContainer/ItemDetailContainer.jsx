import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = ({detalle}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();

    const getProductById = async () => {
        try {
            setLoading(true);
            const docRef = doc(db, "products", idProduct);
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                const productDb = { id: dataDb.id, ...dataDb.data() };
                setProduct(productDb);
            } else {
                console.error("Producto no encontrado");
            }
        } catch (error) {
            console.error("Error al obtener el producto:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductById();
    }, [idProduct]);

    return (
        <div>
            <h1>{detalle}</h1>
            {loading ? <Loading /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
