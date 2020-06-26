import React from "react";

import HeaderStyledComponent from "./HeaderSection.css";
import Header from "./Header";

function HeaderSection() {
  return (
    <HeaderStyledComponent>
      <Header />
      <div className="divider"></div>
    </HeaderStyledComponent>
  );
}

export default HeaderSection;
