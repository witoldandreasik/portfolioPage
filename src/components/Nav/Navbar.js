import React from "react";
import Nav from "./Navbar.css";
import Burger from "./Burger";

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <picture>
          <img
            src={require("../../utils/logo.png")}
            alt="my logo in navigation bar"
          />
        </picture>
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbar;
