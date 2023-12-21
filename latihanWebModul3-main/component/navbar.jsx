import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>
      <Link to="/home" style={{ margin: "10px" }}>
        Home
      </Link>
      <Link to="/about-us" style={{ margin: "10px" }}>
        About Us
      </Link>
      <Link to="/contact" style={{ margin: "10px" }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
