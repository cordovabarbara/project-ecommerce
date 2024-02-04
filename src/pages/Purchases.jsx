import { useEffect } from 'react'
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
      purchases?.map(prodPurchased => (
        <ProductPurchase
          key={prodPurchased.id}
          prodPurchased={prodPurchased}
        />

      ))
    }
    </div>
  )
}

export default Purchases