import styled from "styled-components";

const StyledFooter = styled.section`
  background-color: ${({ theme }) => theme.colors.purple.normal};
  width: 100%;
  min-height: 300px;
  color: white;
  padding: 50px;
  overflow: hidden;
  text-align: center;
  p {
    padding: 10px;
  }
  #contact {
    text-align: center;
    font-size: 2rem;
  }
`;

export default StyledFooter;
