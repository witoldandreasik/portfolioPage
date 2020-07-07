import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;

  justify-items: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  padding: 10px;
  font-size: 1.5rem;

  .budget-wrapper {
    display: flex;
    align-items: center;
    flex-basis: 70%;
    img {
      width: 20%;
      height: 20%;
    }
    p {
      font-size: 1.4rem;
      padding-bottom: 100px;
    }
    .technologies {
      color: ${({ theme }) => theme.colors.purple.normal};
    }
    .budget-info {
      display: flex;
      flex-direction: column;

      .Title-links {
        display: flex;
        font-size: 1.5rem;
        align-items: center;

        a {
          list-style: none;
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
  }
  @media (max-width: 319px) {
    padding: 0 auto;
    .budget-wrapper {
      flex-basis: 100%;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 0.7rem;
      }
      .budget-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0 auto;
    .budget-wrapper {
      flex-basis: 100%;
      img {
        width: 50%;
        height: 50%;
      }
      p {
        font-size: 0.95rem;
        padding-bottom: 50px;
      }
      .budget-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.95rem;
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 1023px) {
    padding: 0 auto;
    .budget-wrapper {
      flex-basis: 100%;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 1.3rem;
        padding-bottom: 50px;
      }
      .budget-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default StyledBudget;
