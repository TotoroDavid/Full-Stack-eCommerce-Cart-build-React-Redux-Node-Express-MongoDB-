/** components */
import CartItem from "../components/CartItem"

const CartScreen = () => {
    return (
        <div className='cartScreen'>
            <div className='cartScreen__left'>
                <h2>Shopping Cart</h2>

                <CartItem />
            </div>
            <div className='cartScreen__right'>
                <div className='cartScreen__info'>
                    <p>SubTotal (0) items</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
