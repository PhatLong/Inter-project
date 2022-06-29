import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../shared/assets/Logoalta.png";
import Input_Pass from "./Input_Pass";

const RsPassSidebar: React.FC = () => {
  return (
    <div className="sidebar_container">
      <div className="LogoWrapper">
        <img src={Logo} alt={"Logo"} />
      </div>
      <form className="rsPass_form">
        <h2>Đặt lại mật khẩu mới</h2>
        <h3>Mặt khẩu</h3>
        <Input_Pass />
        <h3>Nhập lại mặt khẩu</h3>
        <Input_Pass />
        <Link to={"/"}>
          <button>Xác nhận</button>
        </Link>
      </form>
    </div>
  );
};

export default RsPassSidebar;
