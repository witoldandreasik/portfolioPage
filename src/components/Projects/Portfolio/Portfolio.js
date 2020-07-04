import React from "react";

import StyledPortfolio from "./Portfolio.css";

function Portfolio() {
  return (
    <StyledPortfolio>
      <div className="portfolio-wrapper">
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
