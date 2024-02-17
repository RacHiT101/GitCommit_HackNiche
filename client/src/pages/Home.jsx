import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/cart">Cart</Link>
      <Link to="/foodetails">Details</Link>
    </div>
  );
};

export default Home;
