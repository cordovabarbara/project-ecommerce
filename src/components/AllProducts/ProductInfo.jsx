import React, { useState } from "react";
import useCrudCart from "../../hooks/useCrudCart";
import './styles/productinfo.css'

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addProductToCart } = useCrudCart();

    const plus = () => setQuantity(quantity + 1);
    const minus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        const data = {
            quantity,
            productId: product.id,
        };
        addProductToCart(data);
    };
    return (
        <section className="productinfo__box">
            <h3 className="product__brand">{product?.brand}</h3>
            <h2 className="product__title">{product?.title}</h2>
            <p className="product__descri">{product?.description}</p>

            <div className="product__info">
                <span className="product__price1">Price: </span>
                <span className="product__quant">Quantify</span>
            </div>

            <div className="product__btns">
                <span className="product__price2">${product?.price}</span>
                <div className="btn__px">
                <button className="product__btn-handle" onClick={minus}>
                    
                    -
                </button>
                {quantity}
                <button className="product__btn-handle" onClick={plus}>
                    +
                </button>
            </div>
            </div>
            <footer className="product__footer">
                <button className="product__purchase" onClick={handleAddToCart}>
                    Add to cart <i className="bx bx-cart-add"></i>
                </button>
            </footer>
        </section>
    );
};

export default ProductInfo;
