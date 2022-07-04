import React from "react";
import BroadType from "./BroadType";
import Chart_Weeks from "./Chart_Weeks";

const DashBroad_Content_W = () => {
  return (
    <div className="dashbroad_container">
      <h3 className="content_title">Biểu đồ cấp số</h3>
      <BroadType />
      <Chart_Weeks />
    </div>
  );
};

export default DashBroad_Content_W;
