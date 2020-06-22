import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

export default createGlobalStyle`
${Normalize}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
html{
  box-sizing: border-box;
  font-family: 'Monserrat', sans-serif;
}

`;
