import "./styles/infoproduct.css";
import { useNavigate } from "react-router-dom";
import useCrudCart from "../hooks/useCrudCart";

const InfoProduct = ({ product }) => {
    const navigate =  useNavigate()
    const { addProductToCart } = useCrudCart()

    const handleSelectProductId = () => {
    navigate(`/product/${product.id}`)
}
const handleClickBtn = e => {
e.stopPropagation()
const data = {
    quantity: 1,
    productId: product.id,
}
addProductToCart(data)
}

    return (
        
        <div className="product__general-box">
        <article className="product__box" onClick={handleSelectProductId}>
            <header className="product__header">
                <img className="product__img product__img1" src={product?.productImgs?.[1]?.url} alt="" />
                <img className="product__img product__img2" src={product?.productImgs?.[2]?.url}  alt="" />
            </header>
            <section className="product__setion">
                <h2 className="product__brand">{product?.brand}</h2>
                <h3 className="product__title">{product?.title}</h3>
            </section>
            <div className="product__footer">
                <span className="product__price">Price</span>
                <span className="product__price2">{product?.price}</span>
            </div>
            <button className="product__btn" onClick={handleClickBtn}> 
            <i className='bx bx-cart-alt'></i>
            </button>
        </article>
        </div>
    );
};

export default InfoProduct;
