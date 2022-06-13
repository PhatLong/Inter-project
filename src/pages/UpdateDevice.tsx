import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const UpdateDevice = () => {
  const [active, setActive] = useState("kiosk");

  return (
    <div className="main-background">
      <Topbar
        Title="Thiết bị > Danh sách thiết bị > "
        CurrentTitle="Cập nhập thiết bị"
      />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý thiết bị</h3>
        <div className="add_deviceform">
          <h3 className="form-title">Thông tin thiết bị</h3>
          <div className="addform_container">
            <div>
              <label>
                Mã thết bị: <span>*</span>
              </label>
              <input
                type="String"
                placeholder="Nhập mã thiết bị"
                value="KIO_01"
              />
            </div>
            <div>
              <label>
                Loại thiết bị: <span>*</span>
              </label>
              <div className="device_select">
                <Select
                  className="devicetype_select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                  displayEmpty={true}
                  renderValue={
                    active !== "" ? undefined : () => <p>Chọn loại thiết bị</p>
                  }
                >
                  <MenuItem value={"kiosk"}>Kiosk</MenuItem>
                  <MenuItem value={"display_counter"}>Display counter</MenuItem>
                </Select>
              </div>
            </div>
            <div>
              <label>
                Tên thiết bị: <span>*</span>
              </label>
              <input
                type="String"
                placeholder="Nhập tên thiết bị"
                value="Kiosk"
              />
            </div>
            <div>
              <label>
                Tên đăng nhập: <span>*</span>
              </label>
              <input
                type="String"
                placeholder="Nhập tài khoản"
                value="Linhkyo011"
              />
            </div>
            <div>
              <label>
                Địa chỉ IP: <span>*</span>
              </label>
              <input
                type="String"
                placeholder="Nhập địa chỉ IP"
                value="128.172.308"
              />
            </div>
            <div>
              Mặt khẩu: <span>*</span>
              <input type="text" placeholder="Nhập mật khẩu" value="CMS" />
            </div>
            <div className="usedservice_item">
              <label>
                Dịch vụ sử dụng: <span>*</span>
              </label>
              <div className="tag_field">
                <p className="usedservice_tag">
                  Khám tim mạch <BsX />
                </p>
              </div>
            </div>
          </div>
          <p className="notice">
            <span>*</span>Là trường thông tin bắt buộc
          </p>
        </div>
        <div className="addform_button">
          <button className="addform_cancelbtn">Hủy bỏ</button>
          <button className="addform_addbtn">Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDevice;
