import React from 'react'
/**components */
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <h2 className='homeScreen_title'>Latest Products</h2>
            <div className='homeScreen__products'>
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
