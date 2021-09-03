import React from 'react'

const ProductScreen = () => {
    return (
        <div className='productScreen'>
            <div className='productScreen__left'>
                <div className='left__image'>
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
                </div>
                <div className='left__info'>
                    <p className='left__name'>product 1</p>
                    <p>price :  499.00</p>
                    <p>description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat libero voluptate doloremque blanditiis quis aut dolor culpa nisi sapiente earum facilis qui, magni minima itaque ut quae consequatur eveniet? Sunt?</p>
                </div>
            </div>
            <div className='productScreen__right'>
                <div className='right__info'>
                    <p>
                        Price : <span>$499.00</span>
                    </p>
                    <p>
                        status : <span>In shock</span>
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
                        <button type='button'>Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
