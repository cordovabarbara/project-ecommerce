import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import InfoProduct from '../components/InfoProduct';
import './styles/homeProduct.css'
import FilterCategory from '../components/FilterCategory';
import FilterByPrice from '../components/FilterByPrice';


const Home = () => {

  const [inputSearch, setInputSearch] = useState('')

  const [fromTo, setFromTo] = useState({
    from:0,
    to: Infinity,
  })

const { productsGlobal }  = useSelector (state => state)

const inputValue = useRef()

const handleChangeinput = () =>{
  setInputSearch(inputValue.current.value.toLowerCase().trim())

}

const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputSearch))

.filter(prod =>{
  const from = +fromTo.from
  const to = +fromTo.to
  const price = prod.price
  if( from && to){
    return from <= price && price <= to
  }
  if( from && !to ){
    return from <= price
  }
  if(!from && to){
    return price <= to
  }
  if(!from && !to){
    return true
  }
})

  return (
    <>     
    <div className='home__product'>
    <input className='home__input' ref={inputValue} onChange={handleChangeinput} type="text" placeholder='What are you lookin for?'/>
    <button className='btn__search'><i className='bx bx-search-alt-2'></i></button>
    </div>

    <FilterCategory/>
    <FilterByPrice setFromTo={setFromTo}/>


    <div>
      {
        productFilter?.map(prod => (
          <InfoProduct
            key={prod.id}
            prod ={prod}
          />
        ))
      }
    </div>
    
    </>
  )
}

export default Home