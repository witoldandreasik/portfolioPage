import React from "react";
import Ul from "./RightNav.css";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">O mnie</a>
      </li>
      <li>
        <a href="#">Umiejętności</a>
      </li>
      <li>
        <a href="#">Projekty</a>
      </li>
      <li>
        <a href="#">Kontakt</a>
      </li>
    </Ul>
  );
};

export default RightNav;
