import React from "react";

import StyledPomodoro from "./Pomodoro.css";

function Pomodoro() {
  return (
    <StyledPomodoro>
      <div className="pomodoro-wrapper">
        <div className="pomodoro-info">
          <div className="Title-links">
            <h3>Pomodoro Counter</h3>
            <ul>
              <li>
                <a
                  href="https://witoldandreasik.github.io/budget-app/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  href="https://github.com/witoldandreasik/budget-app"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quis
            aspernatur, ipsam perspiciatis omnis nisi, sit culpa dolor eos
            beatae eius nobis est dolorem repudiandae possimus veritatis eaque
            minima fugiat.
          </p>
        </div>
        <img src={require("../../../utils/learning.png")} alt="learning" />
      </div>
    </StyledPomodoro>
  );
}
export default Pomodoro;
