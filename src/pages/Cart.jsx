import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchase from '../hooks/usePurchase'

const Cart = () => {

  const dispatch = useDispatch()
  const {buyThisCart} = usePurchase()

  useEffect(() => {
    dispatch(getAllProductsCartThunk)
  }, [])
  
  const { cartGlobal }  = useSelector(state => state)

  const totalCartGlobal = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)

  const handlePurchase = () => {
    buyThisCart()
  }


  return (
    <div>
    {
        cartGlobal?.map (prodInCart => (
            <ProductInCart
            key={prodInCart.id}
            prodInCart={prodInCart}
            />
        ))
    }
    
    <footer>
      <h3>Total:{totalCartGlobal}</h3>
      <button onClick={handlePurchase}> Buy now</button>
      </footer>
    </div>
   
  )
}

export default Cart