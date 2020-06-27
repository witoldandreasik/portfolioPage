import styled from "styled-components";

const StyledSkills = styled.section`
  display: flex;
  width: 100%;
  padding: 40px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  text-align: justify;
  text-justify: inter-word;
  #skills {
    padding: 50px 0;
  }

  .hard-soft {
    display: flex;
    width: 100%;
    .hard {
      display: flex;
      flex-flow: column;
      flex: 2;
      h3 {
        padding-left: 67px;
      }
      .skills-hard-icons {
        width: 100%;
        height: 100%;
        padding: 0 50px;

        em {
          display: flex;
          //   align-items: center;
          //   justify-content: center;
          padding: 7px 20px;

          span {
            text-align: center;
            font-family: "Monserrat", sans-serif;
            padding: 0 6px;
            cursor: context-menu;
          }
          &:nth-child(odd) {
            color: ${({ theme }) => theme.colors.purple.normal};
          }
        }
      }
    }

    .soft {
      display: flex;
      flex-flow: column;
      flex: 2;
      h3 {
        padding-left: 120px;
      }
      em {
        display: flex;
        padding: 7px 120px;
        text-align: center;
        span {
          text-align: center;
          font-weight: normal;
          font-family: "Monserrat", sans-serif;
          padding: 0 7px;
          cursor: context-menu;
        }
        &:nth-child(odd) {
          color: ${({ theme }) => theme.colors.purple.normal};
        }
      }
    }
  }
  .learning {
    padding: 40px;
    text-align: center;
    .redux-text {
      font-weight: bold;
    }
    img {
      width: 1.5%;
      height: 1.5%;
    }
  }
  .purple {
    color: ${({ theme }) => theme.colors.purple.normal};
  }
`;

export default StyledSkills;
