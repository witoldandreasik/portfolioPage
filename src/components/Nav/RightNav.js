import React from "react";
import Ul from "./RightNav.css";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">Me</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </Ul>
  );
};

export default RightNav;
