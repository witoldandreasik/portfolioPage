import React, { useState } from "react";

import StyledBurger from "./Burger.css";
import RightNav from "./RightNav";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon className="close" icon={faTimes} />
        ) : (
          <FontAwesomeIcon className="burger" icon={faHamburger} />
        )}
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
