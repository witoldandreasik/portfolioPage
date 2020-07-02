import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderSection />
          <AboutMe />
          <Skills />
          <Projects />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
