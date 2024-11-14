import ItemList from "./ItemList.jsx";
import "./itemListContainer.css";
import useProducts from "../../hooks/useProducts.jsx";
import Loading from "../Loading/Loading.jsx";
import 'animate.css';

const ItemListContainer = ({ saludo }) => {
    const { productos, loading } = useProducts();

    return (
        <div className="item-list-container">
            <div>{saludo}</div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="animate__animated animate__zoomInUp">
                        <ItemList productos={productos} />
                    </div>
                )
            }
        </div>
    );
}

export default ItemListContainer;






