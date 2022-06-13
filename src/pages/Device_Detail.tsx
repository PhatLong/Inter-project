import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Device_Detail = () => {
  return (
    <div className="main-background">
      <Topbar
        Title="Thiết bị > Danh sách thiết bị > "
        CurrentTitle="Chi tiết thiết bị"
      />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý thiết bị</h3>
        <div className="device_detailform">
          <h3 className="form-title">Thông tin chi tiết</h3>
          <div className="device_detailwrapper">
            <div className="device_detailname">
              <label>Mã thết bị:</label>
              <p>KIO_01</p>
            </div>
            <div className="device_detailname">
              <label>Loại thết bị:</label>
              <p>Kiosk</p>
            </div>
            <div className="device_detailname">
              <label>Tên thết bị:</label>
              <p>Kiosk</p>
            </div>
            <div className="device_detailname">
              <label>Tên đăng nhập:</label>
              <p>Linhkyo011</p>
            </div>
            <div className="device_detailname">
              <label>Địa chỉ IP:</label>
              <p>128.172.308</p>
            </div>
            <div className="device_detailname">
              <label>Mặt khẩu:</label>
              <p>CMS</p>
            </div>
            <div className="usedservice_item">
              <label>Dịch vụ sử dụng:</label>
              <p>
                Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
                mũi họng, Khám hô hấp, Khám tổng quát.
              </p>
            </div>
          </div>
          <Link to="/update-device">
            <div className="device_add" style={{ top: 40 }}>
              <BsPencilFill className="update_icon" />
              Cập nhập thiết bị
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Device_Detail;
