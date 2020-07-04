import React from "react";

import StyledBudget from "./Budget.css";

function Budget() {
  return (
    <StyledBudget>
      <div className="budget-wrapper">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque voluptatem odit, qui perspiciatis dolor deserunt error
            consequuntur sed eum, dolorem incidunt est ducimus quae delectus
            dignissimos eos, inventore veritatis.
          </p>
        </div>
      </div>
    </StyledBudget>
  );
}

export default Budget;
