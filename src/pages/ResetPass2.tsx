import React from "react";
import styled from "styled-components";
import RsPassContent from "../components/RsPassContent";
import RsPassSidebar2 from "../components/RsPassSidebar_2";

const ResetPass: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <RsPassSidebar2 />
        <RsPassContent />
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
  width: 100%;
  height: 100%;
  display: flex;
`;
export default ResetPass;