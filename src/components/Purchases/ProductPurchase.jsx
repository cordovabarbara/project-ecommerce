
const ProductPurchase = ( {prodPurchased} ) => {
  return (
    <div>
        <article>
            <img src={prodPurchased.product?.productImgs[0].url} alt=""/>
            <h3>{prodPurchased.product.title}</h3>
            <span>{prodPurchased.quantity}</span>
            <span>{prodPurchased.quantity * prodPurchased.product.price}</span>
        </article>
    </div>
  )
}

export default ProductPurchase