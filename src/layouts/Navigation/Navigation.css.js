import styled from "styled-components";

const NavigationStyledComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: inherit;
    font-weight: bold;
    letter-spacing: 0.04rem;
    color: inherit;
    margin: 0 1.5rem;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.purple.normal};
    }
  }
  .nav__my-name {
    display: flex;
    font-size: 3rem;
    padding-bottom: 0.25rem;
  }
  div a {
    position: relative;
    font-size: 1.5rem;
    padding-bottom: 4px;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #000000;
      opacity: 0;
      transition: 0.3s linear;
      overflow: hidden;
    }
    &:hover::before {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.purple.normal};
    }
  }
  @media (max-width: 480px) {
    .nav__my-name {
      font-size: 1.5rem;
    }
    div.nav__large {
      display: none;
    }
    div.nav__mobile {
      display: block;
    }
  }
`;

export default NavigationStyledComponent;
