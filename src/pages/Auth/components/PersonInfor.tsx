import React from "react";
import { BsCamera } from "react-icons/bs";
import Avatar from "../../../shared/assets/avatar.png";
import Profile_Input from "./Profile_Input";

const PersonInfor = () => {
  return (
    <div>
      <div className="infomation-img">
        <div className="name-img">
          <div className="img-icon">
            <img src={Avatar} alt={"avatar_img"} />
            <div className="icon-cam">
              <BsCamera className="camera" />
            </div>
          </div>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
        <div className="infomation">
          <Profile_Input
            Type={"text"}
            label={"Tên người dùng"}
            value={"Lê Quỳnh Ái Vân"}
          />
          <Profile_Input
            Type={"text"}
            label={"Tên đăng nhập"}
            value={"lequynhaivan01"}
          />
          <Profile_Input
            Type={"text"}
            label={"Số điện thoại"}
            value={"321321321321"}
          />
          <Profile_Input Type={"text"} label={"Mật khẩu"} value={"aslJ1353U"} />
          <Profile_Input
            Type={"email"}
            label={"Email"}
            value={"adminSSO1@domain.com"}
          />
          <Profile_Input Type={"text"} label={"Vai trò"} value={"Kế Toán"} />
        </div>
      </div>
    </div>
  );
};

export default PersonInfor;
