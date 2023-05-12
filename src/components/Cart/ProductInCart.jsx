import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({ prodInCart }) => {

    const { deleteProductFromCart } = useCrudCart()

    const handleDeleteCart = () => {
      deleteProductFromCart(prodInCart.id)
    }

  return (
    <article className='product_in_cart'>
        <header className='product_in_cart_header'>
            <img className='product_in_cart_images' src={prodInCart.product.images[0].url} alt="" />
        </header>
          <h3 className='product_in_cart_title'>{prodInCart.product.title}</h3>
        <button className='btn_product_delete' onClick={handleDeleteCart}>
        <i className='bx bx-trash'></i>
        </button>
        <footer className='product_in_cart_footer'>
          <span  className='product_in_cart_quantity'>{prodInCart.quantity}</span>
          <div  className='product_in_cart_subtotal'>
            <span className='product_in_cart_label'>Subtotal</span>
            <span className='product_in_cart_price'>{prodInCart.product.price * prodInCart.quantity}</span>
          </div>
        </footer>
    </article>
  )
}

export default ProductInCart