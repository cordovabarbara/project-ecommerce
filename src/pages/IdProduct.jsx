import React, { useEffect } from "react";

import SliderImg from "../components/AllProducts/SliderImg";
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'
import ProductInfo from "../components/AllProducts/Productinfo";
import SimilarProduct from "../components/AllProducts/SimilarProduct";




const IdProduct = () => {
const {id} = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

    const [product, getProductById] = useFetch(url)



    useEffect(() => {
    getProductById()
    }, [])


  return(
    <div>
    <SliderImg product={product}/>
    <ProductInfo product={product}/>
    <SimilarProduct product={product}/>
    </div>
  ) 
}

export default IdProduct;
