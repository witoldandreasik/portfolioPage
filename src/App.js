import React, { Suspense } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css.js";
import theme from "./utils/theme";

const HeaderSection = React.lazy(() =>
  import("./components/Header/HeaderSection")
);
const Container = React.lazy(() => import("./components/Container"));
const AboutMe = React.lazy(() => import("./components/AboutMe/AboutMe"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/* add loading indicator component in future*/}
        <Suspense fallback={<div>loading...</div>}>
          <Container>
            <HeaderSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
          </Container>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
