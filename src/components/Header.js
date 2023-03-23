import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {FiShoppingCart} from "react-icons/fi";
import { DataContext } from './DataProvider';


const Header = () => {
  const value = useContext(DataContext)
  const [cart] = value.cart
  return (
    <header>
        <div className='logo'>
            <h1>The Generics</h1>
        </div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>

        </ul>
        <div className='cart-icon'>
          <span>{cart.length}</span>
          <Link to="/cart">
            <FiShoppingCart width="30"/>
          </Link>
        </div>
    </header>
  )
}

export default Header;
