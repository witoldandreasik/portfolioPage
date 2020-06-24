import styled from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.purple.normal};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 50px;
    a {
      text-decoration: none;
      color: inherit;
      transition: color 0.2s linear;
      &:hover {
        color: ${({ theme }) => theme.colors.purple.normal};
      }
    }
  }
  @media (max-width: 320px) {
    a {
      display: none;
    }
  }
  @media (max-width: 480px) {
    a {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    a {
      font-size: 2.3rem;
    }
  }
  @media (min-width: 1921px) {
    height: 90px;
    a {
      font-size: 5.3rem;
    }
  }
`;
export default Nav;
