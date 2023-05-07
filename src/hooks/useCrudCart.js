import axios from "axios"
import configToken from "../utils/configToken"

const useCrudCart = () => {

    const addProductToCart = data =>{
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        axios.post (url, data, configToken ())
        .then(res => console.log(res.data))
        .catch (err => console.log(err))
    }
    return {addProductToCart}
}

export default useCrudCart