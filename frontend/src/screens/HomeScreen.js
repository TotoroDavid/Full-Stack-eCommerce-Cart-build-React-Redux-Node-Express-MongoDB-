import React from 'react'
import './HomeScreen.css'

//components
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title"></h2>
            <div className="homescreen__products">
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
