import { Link } from 'react-router-dom'

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className='navbar__logo'>
                <h2>MERN Shopping cart</h2>
            </div>
            {/* links */}
            <ul className='navbar__links'>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartLogo__badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>

            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
