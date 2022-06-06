import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AddDevice = () => {
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
          <h3>Thông tin thiết bị</h3>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
