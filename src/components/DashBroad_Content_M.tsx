import React from "react";
import BroadType from "./BroadType";
import Chart_Months from "./Chart_Months";

const DashBroad_Content_M = () => {
  return (
    <div className="dashbroad_container">
      <h3 className="content_title">Biểu đồ cấp số</h3>
      <BroadType />
      <Chart_Months />
    </div>
  );
};

export default DashBroad_Content_M;
