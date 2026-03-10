import React from 'react'
import { Link } from 'react-router-dom'
// import './main.css';

const Login = () => {
  return (
    <div className='form-container'>
      <p>Please Enter Your Details</p>
      <h1>Welcome Back</h1>
      <div className="input-group">
        <input type="text" placeholder='Email Address' />
      </div>
       <div className="input-group">
        <input type="text" placeholder='Password' />
      </div>
       <div className="input-group-2">
        <input type="checkbox" />
        <label>Remember for 30 Days</label>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
      <button>Sign In</button>
      <p className='p-1'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
    </div>
  )
}

export default Login