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

const [menuOpen, setMenuOpen] = useState(false)

const { productsGlobal }  = useSelector (state => state)

const inputValue = useRef()

const handleChangeinput = () =>{
  setInputSearch(inputValue.current.value.toLowerCase().trim())

}

const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputSearch))

.filter(prod =>{
  const from = +fromTo.from
  const to = +fromTo.to
  const price = product.price
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
    </div>

    <button className='btn__filter' onClick={() => setMenuOpen(!menuOpen)}><i className='bx bx-filter-alt' ></i></button>
    <div className={`menu ${menuOpen ? 'open' : 'closed'}`} style={{right: 0}}>
    <button className='menu__close' onClick={() => setMenuOpen(false)}> x </button>
    <FilterCategory/>
    <FilterByPrice setFromTo={setFromTo}/>
    </div>


    <div className='info__px'>
      {
        productFilter?.map(product => (
          <InfoProduct
            key={product.id}
            product ={product}
          />
        ))
      }
    </div>
    
    </>
  )
}

export default Home