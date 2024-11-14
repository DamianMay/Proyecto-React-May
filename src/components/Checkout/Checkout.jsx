import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname:"",
        phone:"",
        email:""
    })
    const[idOrder, setIdOrder] =useState (null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
                deleteCart()
            .catch((error) =>console.log(error))
            })
    }

    return (
        <div>
            {
                idOrder === null ? (
                    <div className="finaliza-compra">
                        <h2>Finaliza tu compra</h2>
                        <FormCheckout dataForm={dataForm} handleChangeInput = {handleChangeInput} handleSubmitForm ={handleSubmitForm}/>
                    </div>
                ) :(
                    <div className="compra-finalizada">
                        <h2>¡Gracias por ser parte de nuestra comunidad de café!</h2>
                        <p>Tu numero de compra es: <strong>{idOrder}</strong></p>
                        <p>¡Que cada sorbo sea un momento especial! Gracias por confiar en nuestra calidad.</p>
                        <Link to="/Proyecto-React-May" className="volver-inicio">Volver a inicio</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
