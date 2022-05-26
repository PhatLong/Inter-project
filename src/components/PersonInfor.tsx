import React from "react";
import { BsCamera } from "react-icons/bs";
import Avatar from "../assets/avatar.png";

const PersonInfor = () => {
  return (
    <div>
      {" "}
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
          <div className="info-item">
            <label htmlFor="">Tên người dùng</label>
            <input type="text" value={"Lê Quỳnh Ái Vân"} />
          </div>
          <div className="info-item">
            <label htmlFor="">Tên đăng nhập</label>
            <input type="text" value={"lequynhaivan01"} />
          </div>
          <div className="info-item">
            <label htmlFor="">Số điện thoại</label>
            <input type="text" value={"321321321321"} />
          </div>
          <div className="info-item">
            <label htmlFor="">Mật khẩu</label>
            <input type="text" value={"aslJ1353U"} />
          </div>
          <div className="info-item">
            <label htmlFor="">Email</label>
            <input type="text" value={"adminSSO1@domain.com"} />
          </div>
          <div className="info-item">
            <label htmlFor="">Vai trò</label>
            <input type="text" value={"Kế Toán"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfor;
