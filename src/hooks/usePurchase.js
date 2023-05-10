import { useDispatch } from "react-redux"
import configToken from "../utils/configToken"
import axios from "axios"
import { useState } from "react"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const usePurchase = () => {

    const [purchases, setPurchases] = useState()

const dispatch = useDispatch()

    const buyThisCart = () =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
        axios.post(url, {}, configToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

    const getPurchased = () => {
        const url= `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
        axios.get(url, configToken())
        .then(res => setPurchases(res.data))
        .catch (err =>console.log(err)
        )
    }

    return { purchases, getPurchased, buyThisCart}
}

export default usePurchase