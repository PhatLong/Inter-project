import React from "react";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../assets/avatar.png";

type TopbarProps = {
  Title?: string;
  CurrentTitle: string;
};

const Topbar = (props: TopbarProps) => {
  return (
    <div>
      <Nav>
        <Navleft>
          <h3>{props.CurrentTitle}</h3>
          <h3 className="Title">{props.Title}</h3>
        </Navleft>
        <Navright>
          <button>
            <BsBellFill className="bell_icon" />
          </button>
          <Link to="/profile" className="profile_pic">
            <img src={Avatar} alt="" />
          </Link>
          <h3>
            Xin chào
            <br /> <h2>Lê Quỳnh Ái Vân</h2>
          </h3>
        </Navright>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  position: absolute;
  background-color: transparent;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  z-index: 10;
  margin-left: 230px;
  width: 82%;
`;

const Navleft = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ff9138;
  display: flex;
  aligin-items: center;
  padding: 1rem;

  .Title {
    color: #7e7d88;
    margin-left: 8px;
  }
`;

const Navright = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;

  button {
    background: #fff2e7;
    border-radius: 32px;
    border: none;
    color: #ffac6a;
    width: 35px;
    height: 35px;
    padding: 3px;
    margin-right: 8px;
  }

  .bell_icon {
    width: 20px;
    height: 20px;
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: fill;
    border-radius: 50%;
    margin-right: 10px;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7e7d88;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #535261;
  }

  .profile_pic {
    cursor: pointer;
  }
`;

export default Topbar;
