import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
const Shop = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("fakeDB.json")
    .then((res) =>res.json())
    .then(data=>setLaptops(data))
  }, []);
  return (
    <div className="shop-container">
      <div className="allLaptop">
        {
            laptops.map(laptop=><Product laptop={laptop} key={laptop._id}></Product>)
        }
      </div>
      <div className="cartContainer">
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default Shop;
