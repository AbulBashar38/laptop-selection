import React, { useEffect, useState } from "react";
const useProduct = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("fakeDB.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  return [laptops, setLaptops];
};
export default useProduct;
