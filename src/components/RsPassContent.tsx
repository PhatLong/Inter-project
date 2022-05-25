import React from "react";
import styled from "styled-components";
import Img from "./assets/RsPasspic.png";

const RsPassContent: React.FC = () => {
  return (
    <Container>
      <img src={Img} alt={"background_img"} />
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

export default RsPassContent;
