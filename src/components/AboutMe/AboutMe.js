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
        <h1>O mnie</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          quibusdam repellat facilis ipsa. Consequatur molestias laboriosam
          temporibus itaque aspernatur sapiente dignissimos fuga. Modi
          consectetur laudantium minima nihil aliquam, dolor fuga. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Cumque quod quasi rerum.
          Optio dolores ipsa voluptas ab, in repudiandae accusantium. Similique
          assumenda voluptatem corporis laudantium, quisquam odit perspiciatis
          animi numquam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis laborum cumque et ab voluptatem sed architecto
          debitis perspiciatis qui nesciunt, inventore, nihil aut earum
          reiciendis repellendus, voluptas obcaecati blanditiis! Saepe!
        </p>
      </div>
    </StyledAboutMe>
  );
}
export default AboutMe;
