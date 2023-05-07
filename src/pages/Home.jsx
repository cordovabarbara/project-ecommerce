import React from 'react'
import { useSelector } from 'react-redux'
import InfoProduct from '../components/InfoProduct';

const Home = () => {

const { productsGlobal }  = useSelector (state => state)

  return (
    <div>
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