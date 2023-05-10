import React, { useEffect } from 'react'
import usePurchase from '../hooks/usePurchase'
import ProductPurchase from '../components/Purchases/ProductPurchase'


const Purchases = () => {

const { purchases, getPurchased}= usePurchase()

useEffect(() => {
  getPurchased()
}, [])

  return (
    <div>Purchases
    {
      purchases?.map(prodPurchase => (
        <ProductPurchase
          key={prodPurchase.id}
          prodPurchase={prodPurchase}
        />

      ))
    }
    </div>
  )
}

export default Purchases