import React from "react";
import { addToCart } from "../redux/cartslice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fdata() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((e) => console.log(e));
    }
    fdata();
  }, []);

  console.log(products);

  let dispatch = useDispatch();

  return (
    <div className="home">
      <h1>All Items</h1>
      <div className="itemBox">
        {products.map((item) => (
          <div key={item.id} className="card">
            <div className="imgBox">
              <img src={item.images[0]} alt="img.." />
            </div>
            <div className="title">Title: {item.title}</div>
            <div className="price">INR: {item.price}</div>
            <button
              onClick={() => {
                dispatch(addToCart(item));
                alert("Added to Cart!");
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
