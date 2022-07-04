import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import Topbar from "../../../layout/Topbar/Topbar";

const UpdateAccount = () => {
  const [Role, setRole] = useState("Accountant");
  const [State, setState] = useState("not_active");
  const [Name, setName] = useState("Nguyen Van A");
  const [UserName, setUserName] = useState("tuyetnguyen123");
  const [Phone, setPhone] = useState("0902345678");
  const [Password, setPassword] = useState("123456789");
  const [Email, setEmail] = useState("NguyenA154@gmail.com");
  const [RePassword, setRePassword] = useState("123456789");

  return (
    <div className="main-background">
      <Topbar
        Title="Cài đặt hệ thống > Quản lý tài khoản >"
        CurrentTitle="Cập nhật tài khoản"
      />
      <Sidebar />
      <div className="account_container">
        <h3 className="content_title">Quản lý tài khoản</h3>
        <div className="account_wrapper">
          <h3>Cập nhật tài khoản</h3>
          <div className="account-grip">
            <div>
              <label>
                Họ tên: <span>*</span>
              </label>
              <input
                type="text"
                value={Name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label>
                Tên đăng nhập: <span>*</span>
              </label>
              <input
                type="text"
                value={UserName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div>
              <label>
                Số điện thoại: <span>*</span>
              </label>
              <input
                type="number"
                value={Phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div>
              <label>
                Mật khẩu: <span>*</span>
              </label>
              <input
                type="password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <label>
                Email: <span>*</span>
              </label>
              <input
                type="text"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label>
                Nhập lại mật khẩu: <span>*</span>
              </label>
              <input
                type="password"
                value={RePassword}
                onChange={(event) => setRePassword(event.target.value)}
              />
            </div>
            <div className="device_select">
              <label>
                Vai trò <span>*</span>
              </label>
              <Select
                className="account-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                displayEmpty={true}
                renderValue={
                  Role !== "" ? undefined : () => <p>Chọn vai trò</p>
                }
              >
                <MenuItem value={"Accountant"}>Kế toán</MenuItem>
                <MenuItem value={"Management"}>Quản lý</MenuItem>
                <MenuItem value={"admin"}>Admin</MenuItem>
              </Select>
            </div>
            <div className="device_select">
              <label>
                Tình trạng <span>*</span>
              </label>
              <Select
                className="account-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={State}
                onChange={(e) => setState(e.target.value)}
              >
                <MenuItem value={"all"}>Tất cả</MenuItem>
                <MenuItem value={"is_active"}>Hoạt động</MenuItem>
                <MenuItem value={"not_active"}>Ngưng hoạt động</MenuItem>
              </Select>
            </div>
            <p className="account-notice">
              <span>*</span>Là trường thông tin bắt buộc
            </p>
          </div>
        </div>
        <div className="addform_button">
          <Link to="/manage-account">
            <button className="addform_cancelbtn">Hủy bỏ</button>
          </Link>
          <button className="addform_addbtn" type="submit">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
