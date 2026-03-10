import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';

const Register = () => {
  return (
    <div className='form-container'>
      <p>Please Enter Your Details</p>
      <h1>Join Our Family</h1>
      <div className="input-group">
        <input type="text" placeholder='Name' />
      </div>
      <div className="input-group">
        <input type="text" placeholder='Email Address' />
      </div>
       <div className="input-group">
        <input type="text" placeholder='Password' />
      </div>
      <button>Sign Up</button>
      <p className='p-1'>Already have an account? <Link to='/login'>Sign In</Link></p>
    </div>
  )
}

export default Register