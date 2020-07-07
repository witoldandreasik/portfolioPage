import React from "react";
import Nav from "./Navbar.css";
import Burger from "./Burger";
import RightNav from "./RightNav";
function Navbar(open) {
  return (
    <>
      <Nav>
        <div className="logo">
          <img
            src={require("../../utils/logo.png")}
            alt="my logo in navigation bar"
          />
        </div>
        <Burger />
        {/* <RightNav open={open} /> */}
      </Nav>
    </>
  );
}

export default Navbar;
