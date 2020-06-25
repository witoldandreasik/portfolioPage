import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 95px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.purple.normal};
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 319px) {
    .logo {
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
      font-size: 2.1rem;
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
