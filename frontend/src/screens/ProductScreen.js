import React from 'react'
import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img
                        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                        alt="product name" />
                </div>
            </div>
            <div className="left__info">
                <p className="left__name">product name</p>
                <p>price : $499.99</p>
                <p>description :  lorem ipsum</p>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        price : <span>$499.99</span>
                    </p>
                    <p>
                        status : <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProductScreen
