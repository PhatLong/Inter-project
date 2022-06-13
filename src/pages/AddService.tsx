import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AddService = () => {
  return (
    <div className="main-background">
      <Topbar
        Title="Thiết bị > Danh sách thiết bị > "
        CurrentTitle="Thêm dịch vụ"
      />
      <Sidebar />
      <div className="service_container">
        <h3 className="content_title">Quản lý dịch vụ</h3>
        <div className="add_serviceform">
          <h3 className="form-title">Thông tin dịch vụ</h3>
          <div className="add_serviceWrapper">
            <div className="left-content">
              <div>
                <label>
                  Mã dịch vụ: <span>*</span>
                </label>
                <input type="String" placeholder="201" />
              </div>
              <div>
                <label>
                  Tên dịch vụ: <span>*</span>
                </label>
                <input type="String" placeholder="Khám tim mạch" />
              </div>
            </div>
            <div className="service_description">
              <label>Mô tả:</label>
              <textarea placeholder="Mô tả dịch vụ" />
            </div>
          </div>
          <h3 className="form-title">Quy tắc cấp số</h3>
        </div>
      </div>
    </div>
  );
};

export default AddService;
