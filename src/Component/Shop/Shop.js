import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import useProducts from "../hooks/useProducts";
import "./Shop.css";
const Shop = () => {
  const [laptops, setLaptops] = useProducts();
  const [allCartLaptop, setAllCartLaptop] = useState([]);

  const handleAddToCart = (clickedLaptop) => {
    const exists = allCartLaptop.find(
      (cartLaptop) => cartLaptop._id === clickedLaptop._id
    );
    if (!exists) {
      const newCart = [...allCartLaptop, clickedLaptop];
      setAllCartLaptop(newCart);
    } else {
      alert("Item already added");
    }
  };

  const removeCart = () => {
    setAllCartLaptop([]);
  };

  const handleOneItemDelete = (deleteItem) => {
    const CartItemDelete = allCartLaptop.filter(
      (laptop) => laptop._id !== deleteItem._id
    );
    setAllCartLaptop(CartItemDelete);
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
          <CartItem
            cartLaptop={cartLaptop}
            key={cartLaptop._id}
            handleOneItemDelete={handleOneItemDelete}
          ></CartItem>
        ))}
        <button className="shop-remove-btn" onClick={removeCart}>
          <strong>Remove</strong>
        </button>
      </div>
    </div>
  );
};

export default Shop;
