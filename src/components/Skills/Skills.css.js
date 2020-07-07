import styled from "styled-components";

const StyledSkills = styled.section`
  display: flex;
  width: 100%;
  padding: 40px;
  font-size: 1.5rem;
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
        padding-left: 19px;
      }
      .skills-hard-icons {
        em {
          // justify-content: flex-end;
          display: flex;
          // align-items: center;
          // justify-content: center;
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
        padding-left: 5px;
      }
      em {
        /* justify-content: flex-end; */
        display: flex;
        padding: 7px 5px;
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
  @media (max-width: 319px) {
    padding: 0;
    #skills {
      padding: 0 auto;
      font-size: 1.7rem;
    }
    .hard-soft {
      width: 100%;
      flex-flow: row nowrap;
      font-size: 0.7rem;
    }
    .learning {
      font-size: 0.7rem;
      img {
        display: none;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0;

    #skills {
      font-size: 2rem;
    }
    .hard-soft {
      font-size: 0.95rem;
      .soft {
        text-align: center;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
    .learning {
      font-size: 0.95rem;
      img {
        display: none;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    #skills {
      font-size: 2.5rem;
    }
    .hard-soft {
      font-size: 1.4rem;
      .soft {
        text-align: center;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
    .learning {
      font-size: 1.4rem;
      img {
        display: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    #skills {
      font-size: 2.5rem;
    }
    .hard-soft {
      font-size: 1.4rem;
      .soft {
      }
      h3 {
        font-size: 1.8rem;
      }
    }
    .learning {
      font-size: 1.4rem;
      img {
        display: none;
      }
    }
  }
  @media (min-width: 1921px) {
    #skills {
      font-size: 3.5rem;
    }
    .hard-soft {
      font-size: 2rem;
      .soft {
      }
      h3 {
        font-size: 2.5rem;
      }
    }
    .learning {
      font-size: 2rem;
    }
  }
`;

export default StyledSkills;
