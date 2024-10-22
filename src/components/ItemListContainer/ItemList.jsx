import Item from "./item"
import "./itemList.css"

const ItemList = ({productos}) => {
    return (
        <div className="itemLista">  
        {
            productos.map((producto)=>(
                <Item producto={producto} key={producto.id}/>
            ))
        }
        </div>
    )
}

export default ItemList