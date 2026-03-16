import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='header'>
        <div className="logo">
          <h1>Elite<span>Furniture</span></h1>
        </div>
        <div className="nav-links">
            <Link to='/' >Home</Link>
            <Link to='/products' >Products</Link>
            <Link to='/collections' >Collections</Link>
            <Link to='/about' >About Us</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/manage-products' >Admin</Link>
        </div>
        <div className="btns">
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Header