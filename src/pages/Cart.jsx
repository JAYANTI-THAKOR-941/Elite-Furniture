import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state=>state.cart.cart);

  return (
    <div>
        <table>
            <tr>
                <th>Sr.no</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
            </tr>
            {
                cartItems.length === 0 ?(
                    <tr>
                        <td colSpan="6">Your cart is empty.!!</td>
                    </tr>
                ):
                cartItems.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.price * item.qty}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default Cart