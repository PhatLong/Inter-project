import React from "react";
import BroadType from "./BroadType";
import Chart from "./Chart";

const DashBroad_Content = () => {
  return (
    <div className="dashbroad_container">
      <h3 className="content_title">Biểu đồ cấp số</h3>
      <BroadType />
      <Chart />
    </div>
  );
};

export default DashBroad_Content;
