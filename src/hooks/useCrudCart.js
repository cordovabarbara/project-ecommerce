import axios from "axios"
import configToken from "../utils/configToken"
import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const useCrudCart = () => {

    const dispatch= useDispatch()

    const addProductToCart = data =>{
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        axios.post(url, data, configToken ())
            .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch (err => {
            console.log(err)
            if (err.response?.data?.error === 'Product already added to cat'){
                //ejecutar el update
            }
    })
    }

    const deleteProductFromCart = id =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(url, configToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

    const updateProdutInCart = (id, data) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(url, data, configToken())
        .then (res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch (err => console.log(err))
    }

    return {addProductToCart, deleteProductFromCart, updateProdutInCart}
}

export default useCrudCart