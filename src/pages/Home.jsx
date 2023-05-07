import React from 'react'
import { useSelector } from 'react-redux'
import InfoProduct from '../components/InfoProduct';
import './styles/homeProduct.css'

const Home = () => {

const { productsGlobal }  = useSelector (state => state)

  return (
    <div className='home__product'>
      {
        productsGlobal?.map(prod => (
          <InfoProduct
            key={prod.id}
            prod ={prod}
          />
        ))
      }
    </div>
  )
}

export default Home