import React from "react";

import HeaderSection from "./layouts/Header/HeaderSection";
import Container from "./components/Container";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeaderSection></HeaderSection>
        <Container></Container>
      </ThemeProvider>
    </>
  );
}

export default App;
