import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
          <h1>Elite<span>Furniture</span></h1>
        </div>
        <div className="nav-links">
            <Link to='/' >Home</Link>
            <Link to='/my-products' >Products</Link>
            <Link to='/collections' >Collections</Link>
            <Link to='/about' >About Us</Link>
            <Link to='/contact' >Contact</Link>
        </div>
        <div className="btns">
          <button>Login</button>
        </div>
    </div>
  )
}

export default Header