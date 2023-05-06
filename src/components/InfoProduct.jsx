import React from "react";
import "./styles/infoproduct.css";

const InfoProduct = ({ product }) => {
    console.log(product);

    return (
        <article>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <section>
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
            </section>
            <div>
                <span>Price</span>
                <span>{product.price}</span>
            </div>
            <button>
                <i class="bi bi-cart3"></i>
            </button>
        </article>
    );
};

export default InfoProduct;
