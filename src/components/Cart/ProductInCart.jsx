import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({ prodCart }) => {

    const { deleteProductFromCart } = useCrudCart

  return (
    <article>
        <header>
            <img src={prodCart.product.images[0].url} alt="" />
        </header>
    </article>
  )
}

export default ProductInCart