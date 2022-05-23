import React from "react";
import styled from "styled-components";
import Img from "../assets/Loginpic.png";
import SignUpContent from "../SignUpContent";
import SignUpInput from "../SignUpSidebar";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <img src={Img}></img> */}
        <SignUpInput />
        <SignUpContent />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #f6f6f6;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  // background-image: url(${Img});
  // background-position: left;
  // background-size: object;
  // background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default SignUp;
