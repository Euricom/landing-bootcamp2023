import { styled } from "styled-components";

const StyledContactWrapper = styled.div`
  background-color: #062a30;
  padding: 65px 131px;
  h2 {
    color: #fff;
  }
`;

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: #fff;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    flex: 1;
    padding-right: 140px;
  }

  > div {
    background-color: #fff;
    border-radius: 25px;
    width: 626px;
    flex-shrink: 0;

    padding: 41px 33px;

    input:not(:last-of-type) {
      margin-bottom: 25px;
    }

    input:last-of-type {
      margin-bottom: 80px;
    }
  }
`;

const menu = {
  StyledContactWrapper,
  StyledContactForm,
};

export default menu;
