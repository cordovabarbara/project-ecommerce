import React from "react";
import "./styles/infoproduct.css";
import { useNavigate } from "react-router-dom";

const InfoProduct = ({ product }) => {

    const navigate =  useNavigate()
const handleSelectProductId = () => {
    navigate(`/product/${product.id}`)
}
const handleClickBtn = e => {
e.stopPropagation()
}

    return (
        <article className="product__box" onClick={handleSelectProductId}>
            <header className="product__header">
                <img className="product__img" src={product.images[0].url} alt="" />
            </header>
            <section className="product__setion">
                <h4 className="product__subtitle">{product.brand}</h4>
                <h3 className="product__title">{product.title}</h3>
            </section>
            <div className="product__footer">
                <span className="product__price">Price</span>
                <span className="product__price2">{product.price}</span>
            </div>
            <button className="product__btn" onClick={handleClickBtn}> 
            <i className='bx bx-cart-alt'></i>
            </button>
        </article>
    );
};

export default InfoProduct;
