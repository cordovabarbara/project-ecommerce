import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { getAllProductsThunk } from "../store/slices/products.slice"
import { useDispatch } from "react-redux"


const FilterCategory = () => {

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL

  const dispatch = useDispatch()

    const url = `${URL_BASE}/categories`

const [categories, getAllCategories]    = useFetch(url)

useEffect(() => {
    getAllCategories()
}, [])

const handleClickCategories = id =>{
    const url = `${URL_BASE}/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
}

const handleAllProducts = () => {
    dispatch(getAllProductsThunk())
}

  return (
    <section className="filter__bar">
        <h3 className="title1">Categories</h3>
            <ul className='filter__list'>
                <li className='filter__opt' onClick={handleAllProducts}>All Products</li>
            {
                categories?.map(category => (
                    <li className='filter__item' onClick={ () => handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                ))
            }
            </ul>
    </section>
  )
}

export default FilterCategory