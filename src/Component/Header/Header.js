import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-center mb-4">
      <h1>Buy Your Laptop</h1>
      <nav>
        <Link className="text-decoration-none text-dark me-3" to="/">
          Home
        </Link>
        <Link className="text-decoration-none text-dark" to="/review">
          Order Review
        </Link>
      </nav>
    </div>
  );
};

export default Header;
