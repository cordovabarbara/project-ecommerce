import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchase from '../hooks/usePurchase'
import './styles/cart.css'

const Cart = () => {

  const dispatch = useDispatch()
  const {buyThisCart} = usePurchase()

  useEffect(() => {
    dispatch(getAllProductsCartThunk)
  }, [])
  
  const { cartGlobal }  = useSelector(state => state)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product?.price, 0)

  const handlePurchase = () => {
    buyThisCart()
  }


  return (
    <div className='cart'>
      <h1 className='cart__title'>Cart</h1>
      <div className='cart__container'>
      {
        cartGlobal?.map (prodCart => (
            <ProductInCart
            key={prodCart.id}
            prodCart={prodCart}
            />
        ))
    }
    </div>
    <footer className='cart__footer'>
      <span className='cart__total_label'>Total</span>
        <h3 className='cart__total__value'>{totalPriceCart}</h3>
        <button onClick={handlePurchase} className='handlePurchase'>Buy now</button>
      </footer>
    </div>
  )
}

export default Cart