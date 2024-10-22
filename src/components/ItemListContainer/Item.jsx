import "./item.css"
import { Link } from "react-router-dom"

const Item = ( {producto}) => {
    return (
        <Link to={"/detail/" + producto.id} className="item">
            <img className="imagen" src={producto.image}alt="" />
            <p className="titulo">{producto.name}</p>
            <p className="precio">${producto.price}</p>
        </Link>
)
}

export default Item