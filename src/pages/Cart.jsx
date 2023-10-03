import React from "react";
import { useSelector, useDispatch } from "react-redux/";
import { removeFromCart, emptyCart } from "../redux/cartslice";
import "../styles/cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  let totalBill = 0;
  const dispatch = useDispatch();

  function empty() {
    dispatch(emptyCart());
    alert("Checkout Successfully !");
  }

  return (
    <div className="cart">
      <h1>cart Items</h1>  <button onClick={()=>window.scrollTo({top:1000, behavior:'smooth'})} className="bilBtn">Checkout</button>

      {cartItems.length === 0 ? (
        <h3 style={{ margin: "100px  40px",  width:'70vw'}}>
          {" "}
          Hey! Add something, Your cart is empty 🫡
        </h3>
      ) : (
        <div className="cartitemBox">
          {cartItems.map((item) => (
            <div key={item.id} className="card">
              <div className="imgBox">
                <img src={item.images[0]} alt="img.." />
              </div>
              <div className="title">Title: {item.title}</div>
              <div className="price">INR: {item.price}</div>
              <span style={{display:'none'}}>{(totalBill += item.price)}</span>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div id="billSection" className="billstatement">
        <div className="list">
          <h4>Checkout List</h4>
          {cartItems.map((item, i) => (
            <li className="listitem">
              {i + 1 + "  "}
              {item.title} <span>{item.price}</span>
            </li>
          ))}
        </div>
        <div>
          <div className="bill">
            <span>Total</span>
            <span>{totalBill}</span>
          </div>
          <div className="checkout">
            <button onClick={empty}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
