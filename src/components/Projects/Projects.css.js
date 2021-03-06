import styled from "styled-components";

const StyledProjects = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 50px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  #projects {
    font-size: 2.5rem;
    padding-bottom: 50px;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    #projects {
      font-size: 2rem;
    }
    padding: 5%;
  }
`;

export default StyledProjects;
