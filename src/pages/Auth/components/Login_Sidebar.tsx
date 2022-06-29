import React from "react";
import Logo from "../../../shared/assets/Logoalta.png";
import Input from "./Input";
import Input_Pass from "./Input_Pass";
import { Link } from "react-router-dom";

const Login_Sidebar: React.FC = () => {
  return (
    <div className="sidebar_container">
      <div className="LogoWrapper">
        <img src={Logo} alt={"Logo"} />
      </div>
      <form className="login_form">
        <h3>Tên Đăng Nhập *</h3>
        <Input Type="text" />
        <h3>Mật Khẩu *</h3>
        <Input_Pass />
        <Link to={"/forgetpass"}>
          <a href=" ">Quên mật khẩu ?</a>
        </Link>
        <Link to={"/dashbroad"}>
          <button>Đăng Nhập</button>
        </Link>
      </form>
    </div>
  );
};

export default Login_Sidebar;
