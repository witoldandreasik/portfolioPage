import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StyledPomodoro from "./Pomodoro.css";

function Pomodoro() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <StyledPomodoro>
      <div data-aos="fade-left" className="pomodoro-wrapper">
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
            Prosta aplikacja Pomodoro wzbogacona o przyciski dzięki którym można
            ustawić czas według własnych upodobań oraz go zresetować.{" "}
            <span className="technologies">(HTML, CSS, JS)</span>
          </p>
        </div>
        <img src={require("../../../utils/learning.png")} alt="learning" />
      </div>
    </StyledPomodoro>
  );
}
export default Pomodoro;
