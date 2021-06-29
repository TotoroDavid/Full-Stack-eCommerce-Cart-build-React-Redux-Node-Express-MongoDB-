import React from 'react'
import './CartScreen.css'

//componet
import CartItem from '../components/CartItem'

const CartScreen = () => {
    return (
        <divc className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping</h2>
                <CartItem />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>SubTotal (0) items </p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </divc>
    )
}

export default CartScreen
