import { useState, useEffect } from "react"
import { getProducts} from "../data/data"
import { useParams } from "react-router-dom"


const useProducts = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() =>{
        setLoading(true)

        getProducts()
            .then((data) => {
                if(idCategory){
                    const filterproducts= data.filter((product) => product.category === idCategory)
                    setProductos(filterproducts)
                }else{
                    setProductos(data)
                }
            })
            
            .catch ((error) => console.error(error))
            .finally(()=> setLoading(false))
    },[idCategory])

    return{ productos, loading}
}

export default useProducts