import styled from "styled-components";

const HeaderStyledComponent = styled.section`
  width: 100%;
  min-height: 95px;
  .divider {
    width: 100%;
    height: 95px;
  }
  @media (max-width: 319px) {
    .divider {
      display: none;
    }
  }
`;

export default HeaderStyledComponent;
