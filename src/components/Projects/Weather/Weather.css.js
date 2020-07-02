import styled from "styled-components";

const StyledWeather = styled.div`
  display: flex;
  //   flex-basis: 100%;
  padding: 0;
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
`;

export default StyledWeather;
