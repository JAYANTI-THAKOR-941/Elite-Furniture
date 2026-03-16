import React, { useState } from 'react'

const Products = () => {

  const [products,setProducts] = useState(()=>{
    const allProducts = localStorage.getItem('allproducts');
    return allProducts ? JSON.parse(allProducts) : [];
  });

  return (
    <div>
      <h1>Explore Our Products</h1>
      <div className="product-container">
        {
          products.map((p)=>(
            <div className="card">
              <img src={p.image} alt="" />
              <div className="product-info">
                <h3>{p.name}</h3>
                <h3>{p.description}</h3>
                <h3>{p.category}</h3>
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