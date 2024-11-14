import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db.js";

const useProducts = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    const getsProducts = () => {
        setLoading(true);
        const productsRef = collection(db, "products");
        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() };
                });

                setProductos(productsDb);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    const getProductsByCategory = () => {
        setLoading(true);
        const productsRef = collection(db, "products");
        const queryCategories = query(productsRef, where("category", "==", idCategory));
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() };
                });
                setProductos(productsDb);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory();
        } else {
            getsProducts();
        }
    }, [idCategory]);

    return { productos, loading };
};

export default useProducts;
