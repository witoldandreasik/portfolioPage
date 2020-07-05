import React from "react";

import StyledFooter from "./Footer.css";
import ContactForm from "../Contact/ContactForm";

function Footer() {
  return (
    <StyledFooter>
      <h2 id="contact">Kontakt</h2>
      <ContactForm />
      <hr />
      <p>Witold Andreasik © 2020</p>
    </StyledFooter>
  );
}
export default Footer;
