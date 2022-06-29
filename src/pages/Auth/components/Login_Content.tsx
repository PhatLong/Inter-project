import React from "react";
import Img from "../../../shared/assets/Loginpic.png";

const Login_Content: React.FC = () => {
  return (
    <div className="content_container">
      <img src={Img} alt={"background_img"} />
      <div className="content">
        <h1>
          Hệ thống <br />
          <h2>QUẢN LÝ XẾP HÀNG</h2>
        </h1>
      </div>
    </div>
  );
};

export default Login_Content;
