import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [laptops, setLaptops] = useState([]);
  const [allCartLaptop, setAllCartLaptop] = useState([]);
  useEffect(() => {
    fetch("fakeDB.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const handleAddToCart = (clickedLaptop) => {
    if (allCartLaptop.includes(clickedLaptop) === false) {
      if (allCartLaptop.length <= 3) {
        const newCart = [...allCartLaptop, clickedLaptop];
        setAllCartLaptop(newCart);
      }
    }
  };
  return (
    <div className="shop-container">
      <div className="allLaptop">
        {laptops.map((laptop) => (
          <Product
            laptop={laptop}
            key={laptop._id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cartContainer">
        <h4>Selected Laptops</h4>
        {allCartLaptop.map((cartLaptop) => (
          <CartItem cartLaptop={cartLaptop} key={cartLaptop._id}></CartItem>
        ))}
        <button className="shop-choose-btn">
          <strong>Choose 1 for Me</strong>
        </button>
        <button className="shop-remove-btn">
          <strong>Remove</strong>
        </button>
      </div>
    </div>
  );
};

export default Shop;
