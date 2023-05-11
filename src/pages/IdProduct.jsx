import React, { useEffect } from "react";
import SliderImg from "../components/AllProducts/SliderImg";
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'
import SimilarProduct from "../components/AllProducts/SimilarProduct";
import ProductInfo from "../components/AllProducts/Productinfo";



const IdProduct = () => {
const {id} = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

    const [product, getProductById] = useFetch(url)



    useEffect(() => {
    getProductById()
    }, [id])


  return(
    <div>
    <SliderImg product={product}/>
    <ProductInfo product={product}/>
    <SimilarProduct product={product}/>
    </div>
  ) 
}

export default IdProduct;
