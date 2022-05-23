import React from "react";
import styled from "styled-components";
import Img from "./assets/Loginpic.png";

const SignUpContent: React.FC = () => {
  return (
    <Container>
      <img src={Img} alt={"background_img"} />
      <h2>
        Hệ thống <br />
        <h1>QUẢN LÝ XẾP HÀNG</h1>
      </h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    top: 370px;
    left: 1130px;
    font-size: 36px;
    font-weight: 900;
    color: #ff7506;
  }

  h2 {
    top: 370px;
    left: 1130px;
    font-size: 34px;
    font-weight: 400;
    color: #ff7506;
    position: absolute;

    @media (max-width: 900px) {
      display: none;
    }
  }

  img {
    height: 75%;
    width: auto;
  }
`;

export default SignUpContent;
