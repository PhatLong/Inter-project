import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AddDevice = () => {
  const [active, setActive] = useState("");

  return (
    <div className="main-background">
      <Topbar
        Title="Thiết bị > Danh sách thiết bị > "
        CurrentTitle="Thêm thiết bị"
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
              <input type="text" placeholder="Nhập mã thiết bị" />
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
              <input type="text" placeholder="Nhập tên thiết bị" />
            </div>
            <div>
              <label>
                Tên đăng nhập: <span>*</span>
              </label>
              <input type="text" placeholder="Nhập tài khoản" />
            </div>
            <div>
              <label>
                Địa chỉ IP: <span>*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ IP" />
            </div>
            <div>
              Mặt khẩu: <span>*</span>
              <input type="password" placeholder="Nhập mật khẩu" />
            </div>
            <div className="usedservice_item">
              <label>
                Dịch vụ sử dụng: <span>*</span>
              </label>
              <input type="text" placeholder="Nhập dịch vụ sử dụng" />
            </div>
          </div>
          <p className="notice">
            <span>*</span>Là trường thông tin bắt buộc
          </p>
        </div>
        <div className="addform_button">
          <Link to="/device">
            <button className="addform_cancelbtn">Hủy bỏ</button>
          </Link>
          <button className="addform_addbtn">Thêm thiết bị</button>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
