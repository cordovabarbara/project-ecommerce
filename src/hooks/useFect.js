import axios from "axios"
import { useState } from "react"


const useFetch = url => {
    const [ apiInfo, setApiInfo ] = useState()

    const getProductById = () =>{
        axios.get(url)
            .then(res => setApiInfo (res.data))
            .catch (error => console.log(error))
    }
        return [apiInfo, getProductById]
}

export default useFetch