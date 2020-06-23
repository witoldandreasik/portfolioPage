import React from "react";
import Nav from "./Navbar.css";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="#">Witold Andreasik</a>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
