import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { initialState } from './reducer'

function Header() {
    const [{basket}] = useStateValue(initialState);
    
    return (
        <nav className="header">
            {/* Logo */}
            <Link to="/">
                <img alt="Logo" className="header__logo" src="data:image/jpeg;base64,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"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, User</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/"  className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/"  className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout"  className="header__link">
                    <div className="header__optionShoppingCart">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__baskerCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
            {/* cart icon */}
        </nav>
    )
}

export default Header
