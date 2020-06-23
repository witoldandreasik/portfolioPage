import styled from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  border-bottom: 2px solid rgb(100, 21, 255);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;

  .logo {
    line-height: 55px;
    font-weight: bold;
    font-size: 50px;
    a {
      text-decoration: none;
      color: inherit;
      transition: 0.2s linear;
      &:hover {
        color: rgb(100, 21, 255);
      }
    }
  }
`;
export default Nav;
