import styled from "styled-components";

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 1.5rem;
  border-bottom: 1px solid white;
  .contact-icons {
    a em {
      text-decoration: none;
      color: white;
      transform: translateY(0);
      transition: 0.2s linear;
      &:hover {
        transform: translateY(2px);
      }
    }
    em {
      font-size: 2.5rem;
      span {
        padding-left: 5px;
        font-family: "Montserrat";
      }
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    width: 100%;
    div {
      display: flex;
      width: 35%;
      padding: 50px 0;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
      label {
        padding-bottom: 10px 0;
      }
      input {
        border: none;
        outline: none;
        width: 100%;
        background-color: transparent;
        padding: 15px 0 4px;
        border-bottom: 1px solid white;
        color: white;
        transition: 0.2s linear;

        &::placeholder:focus {
          color: white;
          opacity: 0.7;
        }
        &:focus {
          border: none;
          border-bottom: 2px solid white;
        }
      }
      textarea {
        width: 100%;
        min-height: 100%;
        outline: none;
        transform: scale(1);
        transition: 0.2s linear;
        padding: 1px;
        border-radius: 4px;
        font-family: "Montserrat";
        &:focus {
          transform: scale(1.02);
        }
      }
    }
  }
  .buttons {
    display: flex;
    flex-flow: row nowrap;
    button {
      border: none;
      padding: 20px;
      border-right: 2px solid ${({ theme }) => theme.colors.purple.normal};
      cursor: pointer;
      font-size: 1.5rem;
    }
    button:nth-child(1) {
      transition: 0.2s linear;
    }
    button:nth-child(1):hover {
      background-color: ${({ theme }) => theme.colors.purple.dark};
      color: white;
    }
  }

  @media (max-width: 479px) {
    font-size: 1rem;
    padding: 0;
    .contact-icons {
      a em {
        font-size: 1.5rem;
      }
      em {
        font-size: 1rem;
        span {
          font-size: 1rem;
          padding-left: 5px;
          font-family: "Montserrat";
        }
      }
    }
    form {
      div {
        width: 80%;
      }
      .buttons {
        display: flex;
        flex-flow: row nowrap;
        button {
          border: none;
          padding: 5px;
          border-right: 2px solid ${({ theme }) => theme.colors.purple.normal};
          cursor: pointer;
          font-size: 1.5rem;
        }
        button:nth-child(1) {
          transition: 0.2s linear;
        }
        button:nth-child(1):hover {
          background-color: ${({ theme }) => theme.colors.purple.dark};
          color: white;
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.3rem;
    padding: 0;
    .contact-icons {
      a em {
        font-size: 1.5rem;
      }
      em {
        font-size: 1.3rem;
        span {
          font-size: 1.3rem;
        }
      }
    }
    form {
      div {
        width: 80%;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 1.3rem;
    padding: 0;
    .contact-icons {
      a em {
        font-size: 1.5rem;
      }
      em {
        font-size: 1.3rem;
        span {
          font-size: 1.3rem;
        }
      }
    }
    form {
      div {
        width: 80%;
      }
    }
  }
`;

export default StyledContact;
