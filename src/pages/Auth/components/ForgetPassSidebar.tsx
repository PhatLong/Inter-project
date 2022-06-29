import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../shared/assets/Logoalta.png";
import Input from "./Input";

const ForgetPassSidebar: React.FC = () => {
  return (
    <div className="sidebar_container">
      <div className="LogoWrapper">
        <img src={Logo} alt={"Logo"} />
      </div>
      <form className="fgPass_form">
        <h2>Đặt lại mật khẩu</h2>
        <h3>Vui lòng nhập email để đặt lại mật khẩu của bạn *</h3>
        <Input Type="email" />
        <div className="ButtonWrapper">
          <Link to={"/"}>
            <button className="cancel_btn">Hủy</button>
          </Link>
          <Link to={"/resetpass"}>
            <button className="continue_btn">Tiếp tục</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassSidebar;
