import React from "react";

import StyledSkills from "./Skills.css";

function Skills() {
  return (
    <StyledSkills>
      <h2 id="skills">Umiejętności: </h2>
      <div className="hard-soft">
        <div className="hard">
          <h3>Twarde: </h3>
          <div className="skills-hard-icons">
            <em className="devicon-html5-plain">
              <span>HTML5</span>
            </em>
            <em className="devicon-css3-plain">
              <span>CSS3</span>
            </em>
            <em className="devicon-javascript-plain">
              <span>JavaScript i ES6</span>
            </em>
            <em className="devicon-react-original">
              <span>React</span>
            </em>
            <em className="devicon-sass-original">
              <span>Sass</span>
            </em>
            <em className="devicon-bootstrap-plain">
              <span>Bootstrap</span>
            </em>
            <em className="devicon-mysql-plain">
              <span>MySQL i MSSQL</span>
            </em>
            <em className="devicon-webpack-plain">
              <span>Webpack</span>
            </em>
            <em className="devicon-nodejs-plain">
              <span>NodeJS</span>
            </em>
            <em className="devicon-wordpress-plain">
              <span>Wordpress</span>
            </em>
            <em className="devicon-git-plain">
              <span>Git</span>
            </em>
          </div>
        </div>

        <div className="soft">
          <h3>Miękkie:</h3>
          <div className="skills-soft-icons">
            <em className="fas fa-users">
              <span>Umiem pracować w grupie</span>
            </em>
            <em className="fas fa-comments">
              <span>Sprawnie komunikuję się z innymi</span>
            </em>
            <em className="fas fa-calendar-check">
              <span>Świetnie zarządzam czasem</span>
            </em>
            <em className="fas fa-list-alt">
              <span>Potrafię organizować pracę</span>
            </em>
            <em className="fas fa-brain">
              <span>Szybko się uczę i uwielbiam to robić</span>
            </em>
            <em className="fas fa-book-reader">
              <span>Ciekawość to moje drugie imie</span>
            </em>
            <em className="fas fa-hat-wizard">
              <span>Mam głowę pełną pomysłów</span>
            </em>
            <em className="fas fa-smile-beam">
              <span>Jestem zawsze uśmiechnięty</span>
            </em>
            <em className="fas fa-user-clock">
              <span>Punktualność jest dla mnie ważna</span>
            </em>
            <em className="fas fa-hands-helping">
              <span>Stosuję konstruktywną krytykę</span>
            </em>
            <em className="fas fa-fire-alt">
              <span>Zawsze daję z siebie 101%</span>
            </em>
          </div>
        </div>
      </div>
      <div className="learning">
        <h3>Uczę się: </h3>
        <p>
          Oczywistym jest, iż wciąż <span className="purple">rozwijam </span>
          wszystkie moje umiejętności zarówno miękkie jak i twarde, ponadto
          poznaję{" "}
          <span className="purple redux-text">
            <img src={require("../../utils/redux-icon.png")} alt="redux icon" />
            React-redux
          </span>
        </p>
      </div>
    </StyledSkills>
  );
}
export default Skills;
