import styled from "styled-components";

const StyledWeather = styled.div`
  display: flex;

  justify-items: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  padding: 10px;
  font-size: 1.5rem;

  .weather-wrapper {
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
      .technologies {
        color: ${({ theme }) => theme.colors.purple.normal};
      }
    }
    .weather-info {
      display: flex;
      flex-direction: column;
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

    .weather-wrapper {
      flex-basis: 100%;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 0.7rem;
      }
      .weather-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0 auto;
    .weather-wrapper {
      flex-basis: 100%;
      img {
        width: 40%;
        height: 50%;
      }
      p {
        font-size: 0.95rem;
        padding-bottom: 50px;
      }
      .weather-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 0.95rem;
        }
      }
    }
  }

  @media (min-width: 480px) and (max-width: 1023px) {
    padding: 0 auto;
    .weather-wrapper {
      flex-basis: 100%;
      img {
        width: 40%;
        height: 40%;
      }
      p {
        font-size: 1.3rem;
        padding-bottom: 50px;
      }
      .weather-info {
        .Title-links {
          padding-bottom: 4px;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default StyledWeather;
