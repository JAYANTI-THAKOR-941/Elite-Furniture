import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDescription = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // console.log(id);

  useEffect(() => {
    const allProducts = localStorage.getItem("allproducts");

    if (allProducts) {
      const productArray = JSON.parse(allProducts);

      const foundProduct = productArray.find((p) => p.id == id);

      if (foundProduct) {
        setProduct(foundProduct);
        setError("");
      } else {
        setError("Product not found.!!");
      }
    } else {
      setError("No data in localstorage.!!");
    }
  }, [id]);

  if (!product) return <h2>Product not found.!!</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div className="product-desc">
      <div className="product-img">
        <img src={product.image} alt="" />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price:₹{product.price}</p>
        <p>{product.category}</p>
        <button
          onClick={() => {
            dispatch(addToCart(product));
            navigate('/cart');
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
