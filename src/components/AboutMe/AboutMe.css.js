import styled from "styled-components";

const StyledAboutMe = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  .me-info {
    flex: 3;
    font-size: 1.5rem;
  }
  .me-image {
    flex: 2;

    img {
      padding-top: 120px;
      width: 100%;
      height: 100%;
    }
  }
  .me-info {
    font-size: 20px;
    padding: 40px;
  }
`;

export default StyledAboutMe;
