import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StyledWeather from "./Weather.css";

function Weather() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <StyledWeather>
      {" "}
      <div data-aos="fade-right" className="weather-wrapper">
        <img src={require("../../../utils/weather.png")} alt="weather" />
        <div className="weather-info">
          <div className="Title-links">
            <h3>Weather app</h3>
            <ul>
              <li>
                <a
                  href="https://witoldandreasik.github.io/weather-app/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  href="https://github.com/witoldandreasik/weather-app"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
            veritatis alias! Iusto inventore vitae dolor nesciunt qui libero
            officiis soluta facilis harum debitis hic, sit ex optio
            exercitationem illo!
          </p>
        </div>
      </div>
    </StyledWeather>
  );
}

export default Weather;
