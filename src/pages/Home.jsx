import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import InfoProduct from '../components/InfoProduct';
import './styles/homeProduct.css'


const Home = () => {

  const [inputSearch, setInputSearch] = useState('')

const { productsGlobal }  = useSelector (state => state)

const inputValue = useRef()

const handleChangeinput = () =>{
  setInputSearch(inputValue.current.value.toLowerCase().trim())

}
const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputSearch))

  return (
    <>     
    <div className='home__product'>
    <input className='home__input' ref={inputValue} onChange={handleChangeinput} type="text" placeholder='What are you lookin for?'/>
    <button className='btn__search'><i class='bx bx-search-alt-2'></i></button>
    </div>
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