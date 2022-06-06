import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const UpdateDevice = () => {
  return (
    <div className="main-background">
      <Topbar
        Title="Thiết bị > Danh sách thiết bị > "
        CurrentTitle="Cập nhập thiết bị"
      />
      <Sidebar />
    </div>
  );
};

export default UpdateDevice;
