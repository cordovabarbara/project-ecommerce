import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({ prodInCart }) => {

    const { deleteProductFromCart } = useCrudCart()

    const handleDeleteCart = () => {
      deleteProductFromCart(prodInCart.id)
    }

  return (
    <article>
        <header>
            <img src={prodInCart.product.images[0].url} alt="" />
        </header>
        <div>
          <h3>{prodInCart.product.title}</h3>
        </div>
        <button onClick={handleDeleteCart}>
        <i className='bx bx-trash'></i>
        </button>
        <footer>
          <span>{prodInCart.quantity}</span>
          <div>
            <span>Subtotal</span>
            <span>{prodInCart.product.price * prodInCart.quantity}</span>
          </div>
        </footer>
    </article>
  )
}

export default ProductInCart