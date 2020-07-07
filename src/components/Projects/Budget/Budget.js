import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import StyledBudget from "./Budget.css";

function Budget() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);
  return (
    <StyledBudget>
      <div data-aos="fade-right" className="budget-wrapper">
        <img src={require("../../../utils/savings.png")} alt="savings" />
        <div className="budget-info">
          <div className="Title-links">
            <h3>Budget app</h3>

            <a
              href="https://github.com/witoldandreasik/budget-app"
              rel="noreferrer noopener"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <p>
            Projekt aplikacji do kontrolowania wydatków nad którym spędziłem
            bardzo dużo czasu. Tutaj pierwszy raz spotkałem się z reduxem co
            było dla mnie sporym wyzwaniem. Tworzenie tej aplikacji nauczyło
            mnie rozwiązywać złożone problemy jakie spotykałem na swojej drodze.
            <span className="technologies">
              {" "}
              (React, redux, React-router, styled-components)
            </span>
          </p>
        </div>
      </div>
    </StyledBudget>
  );
}

export default Budget;
