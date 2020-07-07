import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StyledPortfolio from "./Portfolio.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
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
            Pierwsza strona internetowa typu landing page robiona w całości
            przeze mnie. Nauczyła mnie radzenia sobie z problemami i szukania
            informacji na znacznie wyższym poziomie niż wcześniej.{" "}
            <span className="technologies">(React, styled-components)</span>
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
