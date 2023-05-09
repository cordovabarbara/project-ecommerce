import React, { useState } from "react";
import useCrudCart from "../../hooks/useCrudCart";

const ProductInfo = ({ product }) => {
const [quantity, setQuantity] = useState(1);
const { addProductToCart } = useCrudCart()

    const plus = () => setQuantity(quantity + 1);
    const minus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () =>{
        const data = {
            quantity,
            productId: product.id
        }
        addProductToCart(data)
    }
    return (
        <section className="productinfo__box">
            <h3 className="product__brand">{product?.brand}</h3>
            <h2 className="product__title">{product?.title}</h2>
            <p className="product__descri">{product?.description}</p>
            <footer className="product__footer">
                <div className="product__info">
                    <span className="product__price1">Price</span>
                    <span className="product__price2">{product?.price}</span>
                </div>
                <div className="product__btns">
                    <span className="product__quantify">Quantify</span>
                    <div>
                        <button className="product__btn-minus" onClick={minus}> - </button>
                        <div>{quantity}</div>
                        <button className="product__btn-plus"  onClick={plus}> + </button>
                    </div>
                </div>
                <button onClick={handleAddToCart}> Add to cart <i className='bx bx-cart-add'></i></button>
            </footer>
        </section>
    );
};

export default ProductInfo
