import React from "react";
import Ul from "./RightNav.css";
import Scrollchor from "react-scrollchor";

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <Scrollchor to="#me-image">O mnie</Scrollchor>
      </li>
      <li>
        <Scrollchor to="#skills">Umiejętności</Scrollchor>
      </li>
      <li>
        {/* use scrollochor ^ */}
        <Scrollchor to="#projects">Projekty</Scrollchor>
      </li>
      <li>
        <a href="#">Kontakt</a>
      </li>
    </Ul>
  );
};

export default RightNav;
