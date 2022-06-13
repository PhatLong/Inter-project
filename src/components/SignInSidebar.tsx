import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logoalta.png";
import SigninInput from "./SigninInput";
import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";

const SignInSidebar: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt={"Logo"} />
      </LogoWrapper>
      <Form>
        <h3>Tên Đăng Nhập *</h3>
        <SigninInput Type="text" />
        <h3>Mật Khẩu *</h3>
        <SigninInput Type="password" />
        {/* <BsEyeSlash /> */}
        <Link to={"/resetpass"}>
          <a href=" ">Quên mật khẩu ?</a>
        </Link>
        <Link to={"/dashbroad"}>
          <button>Đăng Nhập</button>
        </Link>
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
  align-items: flex-start;
  margin-left: 100px;

  h3 {
    color: black;
    margin-top: 10px;
    font-weight: 400;
    font-sized: 18px;
    line-height: 27px;
  }

  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #e73f3f;
  }

  button {
    width: 162px;
    height: 40px;
    background-color: #ff9138;
    box-shadow: 0px 0px 6px #e7e9f2;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: white;
    border: none;
    margin-top: 20px;
    margin-left: 130px;
    cursor: pointer;
    transition: all 0.2 ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export default SignInSidebar;
