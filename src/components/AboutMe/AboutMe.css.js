import styled from "styled-components";

const StyledAboutMe = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  h1 {
    text-align: center;
    padding-bottom: 15px;
  }
  #me-info {
    h2 {
      text-align: center;
      padding: 50px;
      font-size: 2.25rem;
    }
    flex: 3;
    font-size: 1.5rem;
  }
  #me-image {
    flex: 2;

    img {
      padding-top: 120px;
      width: 100%;
      height: 100%;
    }
  }
  #me-info {
    font-size: 20px;
    padding: 40px;
  }
  @media (max-width: 319px) {
    flex-flow: column nowrap;
    #me-info {
      h2 {
        font-size: 1.7rem;
      }
      padding: 0;
      text-align: center;
      font-size: 0.7rem;
    }
    #me-image {
      flex: 2;
      img {
        padding-top: 0;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    flex-flow: column nowrap;
    #me-info {
      h2 {
        font-size: 2rem;
      }
      text-align: center;
      font-size: 0.95rem;
      padding: 3px 15px;
      line-height: 22px;
      text-align: justify;
      text-justify: inter-word;
    }
    #me-image {
      flex: 2;
      img {
        padding-top: 0;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    flex-flow: column nowrap;

    #me-info {
      h2 {
        font-size: 2.5rem;
      }
      text-align: center;
      font-size: 1.4rem;
      padding: 20px 10px;
      line-height: 22px;
      text-align: justify;
      text-justify: inter-word;
    }
    #me-image {
      flex: 2;
      img {
        padding-top: 0;
      }
    }
  }
  @media (min-width: 1921px) {
    #me-info {
      h2 {
        font-size: 3.5rem;
      }
      font-size: 2rem;
    }
  }
`;

export default StyledAboutMe;
