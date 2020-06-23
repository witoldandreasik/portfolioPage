import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0 10px;
    line-height: 55px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0.09rem;
    transition: 0.2s linear;
    &:hover {
      color: ${({ theme }) => theme.colors.purple.normal};
      box-shadow: 0 2px 0 0 rgb(100, 21, 255);
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    // padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    li {
      color: white;
    }
  }
`;
export default Ul;
