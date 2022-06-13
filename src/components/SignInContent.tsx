import React from "react";
import styled from "styled-components";
import Img from "../assets/Loginpic.png";

const SignInContent: React.FC = () => {
  return (
    <Container>
      <img src={Img} alt={"background_img"} />
      <Content_Wrapper>
        <h1>
          Hệ thống <br />
          <h2>QUẢN LÝ XẾP HÀNG</h2>
        </h1>
      </Content_Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 75%;
    width: auto;
  }
`;

const Content_Wrapper = styled.div`
  position: absolute;
  top: 350px;
  left: 1140px;

  h2 {
    font-size: 36px;
    font-weight: 900;
    color: #ff7506;
  }

  h1 {
    font-size: 34px;
    font-weight: 400;
    color: #ff7506;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default SignInContent;
