import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import Container from "./components/Container";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderSection />
          <AboutMe />
          <Skills />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
