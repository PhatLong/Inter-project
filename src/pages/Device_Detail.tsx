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
    </div>
  );
};

export default Device_Detail;
