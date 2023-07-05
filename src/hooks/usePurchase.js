import { useDispatch } from "react-redux"
import configToken from "../utils/configToken"
import axios from "axios"
import { useState } from "react"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/purchase`

const usePurchase = () => {

    const [purchases, setPurchases] = useState()

const dispatch = useDispatch()

    const buyThisCart = () =>{
        axios.post(url, {}, configToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

    const getPurchased = () => {
        axios.get(url, configToken())
        .then(res => setPurchases(res.data))
        .catch (err =>console.log(err)
        )
    }

    return { purchases, getPurchased, buyThisCart}
}

export default usePurchase