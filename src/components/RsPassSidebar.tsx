import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./assets/Logoalta.png";
import SigninInput from "./SigninInput";

const RsPassSidebar: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt={"Logo"} />
      </LogoWrapper>
      <Form>
        <h2>Đặt lại mật khẩu</h2>
        <h3>Vui lòng nhập email để đặt lại mật khẩu của bạn *</h3>
        <SigninInput Type="email" />
        <ButtonWrapper>
          <Link to={"/"}>
            <button className="Cancel_btn">Hủy</button>
          </Link>
          <Link to={"/resetpass-2"}>
            <button className="Continue_btn">Tiếp tục</button>
          </Link>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  min-width: 550px;
  backdrop-filter: blur(35px);
  background-color: rgba(225, 225, 225, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

const LogoWrapper = styled.div`
  padding-top: 0;
  margin-top: 0;
  img {
    width: 80%;
    height: 70%;
    object-fit: contain;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #282739;
  }

  h3 {
    color: black;
    margin-top: 10px;
    font-weight: 400;
    font-sized: 18px;
    line-height: 27px;
  }
`;

const ButtonWrapper = styled.div`
  display: inline;

  button {
    width: 162px;
    height: 40px;
    border: none;
    box-shadow: 0px 0px 6px #e7e9f2;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    margin-left: 20px;
    cursor: pointer;
    transition: all 0.2 ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }

  .Cancel_btn {
    color: #ff9138;
    border: 1px solid #ff9138;
    filter: drop-shadow(0px 0px 6px #e7e9f2);
  }

  .Continue_btn {
    background-color: #ff9138;
    box-shadow: 0px 0px 6px #e7e9f2;
    color: white;
  }
`;

export default RsPassSidebar;
