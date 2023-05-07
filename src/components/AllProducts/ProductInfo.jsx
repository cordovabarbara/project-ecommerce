import React, { useState } from "react";

const ProductInfo = ({ product }) => {
    const [quantify, setQuantify] = useState(1);

    const plus = () => setQuantify(quantify + 1);
    const minus = () => {
        if (quantify - 1 >= 1) {
            setQuantify(quantify - 1);
        }
    };

    return (
        <section>
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <footer>
                <div>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </div>
                <div>
                    <span>Quantify</span>
                    <div>
                        <button onClick={minus}> - </button>
                        <div>{quantify}</div>
                        <button onClick={plus}> + </button>
                    </div>
                </div>
                <button> Add to car <i className='bx bx-cart-add'></i></button>
            </footer>
        </section>
    );
};

export default ProductInfo
