import React from "react";

import StyledPomodoro from "./Pomodoro.css";

function Pomodoro() {
  return (
    <StyledPomodoro>
      <div className="pomodoro-wrapper">
        <div className="pomodoro-info">
          <div className="Title-links">
            <ul>
              <li>
                <a
                  href="https://witoldandreasik.github.io/pomodoro-counter/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  href="https://github.com/witoldandreasik/pomodoro-counter"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <h3>Pomodoro Counter</h3>
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
