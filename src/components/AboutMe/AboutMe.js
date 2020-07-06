import React from "react";

import StyledAboutMe from "./AboutMe.css";

function AboutMe() {
  return (
    <StyledAboutMe>
      <div id="me-image">
        <picture>
          <img
            src={require("../../utils/problems.png")}
            alt="problem resolving process"
          />
        </picture>
      </div>
      <div id="me-info">
        <h2>O mnie</h2>
        <p>
          Pełen energii technik informatyk z licencją spawacza ubiegający się o
          stanowisko Junior Frontend/React Developera. W pracy jestem
          zorganizowany i zaangażowany w zlecone mi zadania. Uwielbiam pracę
          zespołową i nowe wyzwania. Codziennie staram się rozwijać moje
          umiejętności. W wolnym czasie czytam książki i literaturę
          naukową(astronomia), gram w gry, oglądam seriale.
        </p>
      </div>
    </StyledAboutMe>
  );
}
export default AboutMe;
