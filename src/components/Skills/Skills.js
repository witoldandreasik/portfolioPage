import React from "react";

import StyledSkills from "./Skills.css";
import {
  faUsers,
  faComments,
  faListAlt,
  faBrain,
  faBookReader,
  faCalendarCheck,
  faHatWizard,
  faSmileBeam,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Skills() {
  return (
    <StyledSkills>
      <h2>Umiejętności: </h2>
      <h3>Twarde: </h3>
      <i class="devicon-html5-plain"></i>
      <i class="devicon-css3-plain"></i>
      <i class="devicon-javascript-plain"></i>
      <i class="devicon-react-original"></i>
      <i class="devicon-sass-original"></i>
      <i class="devicon-bootstrap-plain"></i>
      <i class="devicon-mysql-plain"></i>
      <i class="devicon-git-plain"></i>
      <i class="devicon-webpack-plain"></i>
      <i class="devicon-nodejs-plain"></i>
      <i class="devicon-wordpress-plain"></i>
      <h3>Uczę się: </h3>
      <img src={require("../../utils/redux-icon.png")} alt="redux icon" />
      <h3>Miękkie: </h3>
      <FontAwesomeIcon icon={faUsers} />
      <FontAwesomeIcon icon={faComments} />
      <FontAwesomeIcon icon={faCalendarCheck} />
      <FontAwesomeIcon icon={faListAlt} />
      <FontAwesomeIcon icon={faBrain} />
      <FontAwesomeIcon icon={faBookReader} />
      <FontAwesomeIcon icon={faHatWizard} />
      <FontAwesomeIcon icon={faSmileBeam} />
      <FontAwesomeIcon icon={faUserClock} />
    </StyledSkills>
  );
}
export default Skills;
