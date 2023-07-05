import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import InfoProduct from "../InfoProduct"

const SimilarProduct = ({product}) => {
const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`

const [filterProducts, getProductByCategory]= useFetch(url)

useEffect(() => {
    if(product){
        getProductByCategory()
    }
}, [product])
    return (
    <section>
        <h1>Discover similar products</h1>
        <div>
            {
                filterProducts?.map( prod => {
                    if(prod.id !== product.id)
                    return(
                        <InfoProduct
                        key={prod.id}
                        prod={prod}
                        />
                    )
                }
                )
            }
        </div>
    </section>
  )
}
export default SimilarProduct