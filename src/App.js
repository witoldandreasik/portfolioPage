import React from "react";

import HeaderSection from "./components/Header/HeaderSection";
import Container from "./components/Container";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderSection></HeaderSection>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
