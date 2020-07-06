import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StyledPortfolio from "./Portfolio.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-in-out" });
  }, []);
  return (
    <StyledPortfolio>
      <div data-aos="fade-left" className="portfolio-wrapper">
        <div className="portfolio-info">
          <div className="Title-links">
            <ul>
              <li>
                <a
                  href="https://witoldandreasik.github.io/portfolioPage/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  href="https://github.com/witoldandreasik/portfolioPage"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <h3>Portfolio page</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quis
            aspernatur, ipsam perspiciatis omnis nisi, sit culpa dolor eos
            beatae eius nobis est dolorem repudiandae possimus veritatis eaque
            minima fugiat.
          </p>
        </div>
        <img
          src={require("../../../utils/portfolio.png")}
          alt="portfolio visualisation"
        />
      </div>
    </StyledPortfolio>
  );
}
export default Portfolio;
