import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <>
      <div className='hero-container'>
        <h1>Elevate Your Living Space</h1>
        <p>Discover handcrafted, premium furniture designed to transform
          your home into a masterpiece of comfort and style.</p>
        <button>Explore Collections</button>
      </div>

      <Products/>
    </>
  )
}

export default Home