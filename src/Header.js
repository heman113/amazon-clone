import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{cart,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img className='header_logo' src='/images/logo.png' />
        </Link>
        
        <div className='header_search'>
            <input className='search_input' />
            <SearchIcon className='search_icon' />
        </div>
        <div className='header_nav'>
            <div className='nav_options'>
                <span className='option_tag'>{user ? user.email : 'Hello'}</span>
                <Link to={!user && "/login"}>
                <span onClick={handleAuthentication} className='option'>{user ? 'Sign out' : 'Sign in'}</span>
                </Link>
            </div>
            <div className='nav_options'>
                <span className='option_tag'>Returns</span>
                <span className='option'>& Orders</span>
            </div>
            <div className='nav_options'>
                <span className='option_tag'>Your</span>
                <span className='option'>Prime</span>
            </div>
            <Link to="/checkout">
                <div className='nav_cart'>
                    <ShoppingCartIcon />
                    <span className='cart_count'>{cart?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header