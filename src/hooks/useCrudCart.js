import axios from "axios"
import configToken from "../utils/configToken"
import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const useCrudCart = () => {

    const dispatch= useDispatch()

    const addProductToCart = data =>{
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart`
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
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart/${id}`
        axios.delete(url, configToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

    const updateProdutInCart = (id, data) => {
        const URL_BASE = import.meta.env.VITE_REACT_APP_URL
        const url = `${URL_BASE}/cart/${id}`
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