/**
 * cartActions for our redux 
 */
import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}


/**
 * Actions are the only source of information for the store as per Redux official documentation. It carries a payload of
 * information from your application to store. As discussed earlier, actions are plain JavaScript object that must have a
 * type attribute to indicate the type of action performed.
 */