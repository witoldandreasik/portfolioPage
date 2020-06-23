import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: none;
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  .burger {
    font-size: 2rem;
    color: #000;
    transition: 0.3s ease-in-out;
  }
  .close {
    font-size: 3rem;
    color: rgb(100, 21, 255);
    transition: 0.3s ease-in-out;
  }
`;
export default StyledBurger;
