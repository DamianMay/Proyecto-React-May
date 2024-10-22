import "./itemDetail.css"
const ItemDetail = ({product}) => {
    return (
        <div className="product">
            <img src={product.image}  alt="" />
            <div className="description">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        </div>

    )
}

export default ItemDetail