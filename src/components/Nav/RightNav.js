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
        <Scrollchor to="#projects">Projekty</Scrollchor>
      </li>
      <li>
        <Scrollchor to="#contact">Kontakt</Scrollchor>
      </li>
    </Ul>
  );
};

export default RightNav;
