import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 85px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.purple.normal};
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
  z-index: 2;
  overflow: hidden;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 319px) {
    justify-content: center;
    .logo img {
      max-width: 80%;
      max-height: 80%;
    }
  }
  @media (max-width: 767px) {
    /* display: none; */
  }
  @media (min-width: 1921px) {
    height: 90px;
    font-size: 5.3rem;
  }
`;
export default Nav;
