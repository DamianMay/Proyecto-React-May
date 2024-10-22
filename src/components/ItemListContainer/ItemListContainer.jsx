import ItemList from "./ItemList.jsx"
import "./itemListContainer.css"
import useProducts from "../../hooks/useProducts.jsx"
import Loading from "../Loading/Loading.jsx"


const ItemListContainer = ( { saludo } ) => {
    const { productos, loading} = useProducts ()

    return (
        <div className="item-list-container">
            <h1>{saludo}</h1>
            {
                loading === true ? <Loading/> : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer


/*minuto 39:00 clase 17/10*/



