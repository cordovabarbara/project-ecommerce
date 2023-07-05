import React, { useEffect } from "react";
import SliderImg from "../components/AllProducts/SliderImg";
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'
import SimilarProduct from "../components/AllProducts/SimilarProduct";
import ProductInfo from "../components/AllProducts/ProductInfo";


const IdProduct = () => {
const {id} = useParams()

const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/products/${id}`

    const [product, getProductById] = useFetch(url)



    useEffect(() => {
    getProductById()
    }, [id])


  return(
    <div className="general__box">
    <SliderImg product={product}/>
    <ProductInfo product={product}/>
    <SimilarProduct product={product}/>
    </div>
  ) 
}

export default IdProduct;
