import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    position: relative;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0.09rem;
    transition: color 0.2s linear;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      opacity: 0;
      background-color: #000;
      transition: 0.2s linear;
    }
    &:hover::after {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.purple.normal};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.purple.normal};
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
    transition: transform 0.3s ease-in-out;
    align-items: center;
    justify-content: center;
    li {
      color: white;
    }
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    a {
      font-size: 1.18rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    a {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 1921px) {
    align-items: center;
    justify-content: center;
    height: 90px;
    a {
      font-size: 3.5rem;
    }
  }
`;
export default Ul;
