import React, { useState } from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';
const Products = () => {

  const [products,setProducts] = useState(()=>{
    const allProducts = localStorage.getItem('allproducts');
    return allProducts ? JSON.parse(allProducts) : [];
  });

  const navigate = useNavigate();

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("all");

  const filterProducts = products.filter((p)=>{
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all'?true:p.category.toLowerCase() == category.toLowerCase();
    return matchSearch && matchCategory;
  })

  return (
    <div>
      <div className="hero-title">
         <h1>Upgrade Your Home with Premium Furniture</h1>
         <p>Shop high-quality furniture at unbeatable prices. From sofas to dining sets, find everything you need to create your dream home.</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder='Search Products' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="living room">Living Room</option>
          <option value="dining">Dining</option>
          <option value="bedroom">Bedroom</option>
          <option value="study">Study</option>
        </select>
      </div>
      <div className="product-container">
        {
          filterProducts.map((p)=>(
            <div className="card" key={p.id}>
              <img src={p.image} alt="" />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>{p.category}</p>
                <div className="bottom">
                  <p>Price:₹{p.price}</p>
                  <div className="btns">
                    <button onClick={()=>navigate(`/product/${p.id}`)}>View Details</button>
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