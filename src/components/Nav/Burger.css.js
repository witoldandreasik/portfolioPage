import styled from "styled-components";

const StyledBurger = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 3;
  display: none;
  cursor: pointer;
  margin: 0 auto;

  .burger {
    font-size: 2rem;
    color: #000;
    transition: 0.3s ease-in-out;
  }
  .close {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.purple.normal};
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 479px) {
    .burger {
      font-size: 26px;
    }
    .close {
      font-size: 26px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
  }
`;
export default StyledBurger;
