import React from "react";

import NavigationStyledComponent from "./Navigation.css";

function Navigation() {
  return (
    <NavigationStyledComponent>
      <a className="nav__my-name" href="#">
        Witold Andreasik
      </a>
      <div className="nav__large">
        <a href="#">Me</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="nav__mobile">
        <i className="fas fa-hamburger"></i>
      </div>
    </NavigationStyledComponent>
  );
}

export default Navigation;
