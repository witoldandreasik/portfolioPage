import styled from "styled-components";

const StyledPortfolio = styled.div`
  display: flex;
  flex-basis: 100%;
  padding: 0;
  justify-items: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.5rem;
  .portfolio-wrapper {
    display: flex;
    align-items: center;
    padding-left: 30%;
    img {
      display: flex;
      width: 20%;
      height: 20%;
    }

    p {
      font-size: 1.4rem;
      padding-bottom: 100px;
      .technologies {
        color: ${({ theme }) => theme.colors.purple.normal};
      }
    }
    .portfolio-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      ul {
        list-style: none;
        li {
          a {
            padding: 5px;
            text-decoration: none;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.purple.normal};
            &:hover {
              color: ${({ theme }) => theme.colors.purple.dark};
            }
          }
        }
      }
      .Title-links {
        display: flex;
        font-size: 1.5rem;
        align-items: center;
      }
    }
  }
  @media (max-width: 319px) {
    padding: 0 auto;
    .portfolio-wrapper {
      flex-basis: 100%;
      padding-left: 0;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 0.7rem;
      }
      .portfolio-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0 auto;

    .portfolio-wrapper {
      flex-basis: 100%;
      box-sizing: border-box;
      padding-left: 0;
      padding-right: 10%;
      img {
        width: 50%;
        height: 50%;
      }
      p {
        font-size: 0.95rem;
        padding-bottom: 50px;
      }
      .portfolio-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.95rem;
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 1023px) {
    padding: 0 auto;
    .portfolio-wrapper {
      padding-left: 0;
      flex-basis: 100%;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 1.3rem;
        padding-bottom: 50px;
      }
      .portfolio-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default StyledPortfolio;
