import { createGlobalStyle } from "styled-components";
// import { Normalize } from "styled-normalize";

export default createGlobalStyle`

*{
  box-sizing:border-box;
  padding:0;
  margin:0; 
 &::selection {
          background-color: #6415ff;
        }
}
body{
  font-family: 'Monserrat', sans-serif;  
  &::-webkit-scrollbar {
  width: 1em;
}
 
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
&::-webkit-scrollbar-thumb {
  background-color: #6415ff;
  outline: 1px solid white;
}
}
`;
