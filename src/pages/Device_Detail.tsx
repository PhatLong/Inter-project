import React from "react";
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
          <div>
            <label>Mã thết bị:</label>
            <p>KIO_01</p>
          </div>
          <div>
            <label>Loại thết bị:</label>
            <p>Kiosk</p>
          </div>
          <div>
            <label>Tên thết bị:</label>
            <p>Kiosk</p>
          </div>
          <div>
            <label>Tên đăng nhập:</label>
            <p>Linhkyo011</p>
          </div>
          <div>
            <label>Địa chỉ IP:</label>
            <p>128.172.308</p>
          </div>
          <div>
            <label>Mặt khẩu:</label>
            <p>CMS</p>
          </div>
          <div>
            <label>Dịch vụ sử dụng:</label>
            <p>
              Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
              mũi họng, Khám hô hấp, Khám tổng quát.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device_Detail;
