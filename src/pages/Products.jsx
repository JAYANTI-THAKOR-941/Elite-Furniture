import React, { useState } from 'react'
import './main.css';
const Products = () => {

  const [products,setProducts] = useState(()=>{
    const allProducts = localStorage.getItem('allproducts');
    return allProducts ? JSON.parse(allProducts) : [];
  });

  return (
    <div>
      <div className="hero-title">
         <h1>Upgrade Your Home with Premium Furniture</h1>
         <p>Shop high-quality furniture at unbeatable prices. From sofas to dining sets, find everything you need to create your dream home.</p>
      </div>
      <div className="product-container">
        {
          products.map((p)=>(
            <div className="card">
              <img src={p.image} alt="" />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>{p.category}</p>
                <div className="bottom">
                  <p>Price:₹{p.price}</p>
                  <div className="btns">
                    <button>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products