import React from "react";

import StyledProjects from "./Projects.css";
import Budget from "./Budget/Budget";
import Pomodoro from "./Pomodoro/Pomodoro";
import Weather from "./Weather/Weather";
import Portfolio from "./Portfolio/Portfolio";

function Projects() {
  return (
    <StyledProjects>
      <h2 id="projects">Projekty</h2>
      <Budget />
      <Pomodoro />
      <Weather />
      <Portfolio />
    </StyledProjects>
  );
}

export default Projects;
