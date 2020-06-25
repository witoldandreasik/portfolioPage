import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import Container from "./components/Container";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderSection></HeaderSection>
          <AboutMe />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
