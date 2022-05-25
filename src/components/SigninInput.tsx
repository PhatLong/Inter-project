import React from "react";
import styled from "styled-components";
type InputProps = {
  Type: any;
};

const SigninInput = (props: InputProps) => {
  return (
    <Container>
      <StyledInput type={props.Type} required autoComplete="off" />
    </Container>
  );
};

const StyledInput = styled.input`
  //   width: 80%;
  //   max-width: 350px;
  //   min-width: 250px;
  width: 400px;
  height: 44px;
  border-radius: 8px;
  border: 1.5px solid #d4d4d7;
  margin: 0.5rem 0;
  background-color: white;
  padding: 0 1rem;
  transition: all 0.2 ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

export default SigninInput;
