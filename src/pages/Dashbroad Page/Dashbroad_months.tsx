import React from "react";
import DashBroad_Month from "./components/DashBroad_Content_M";
import Overview from "./components/Dashbroad_Overview";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

const Dashbroad_months = () => {
  return (
    <div className="main-background">
      <Topbar CurrentTitle="Dashbroad" />
      <Sidebar />
      <DashBroad_Month />
      <Overview />
    </div>
  );
};

export default Dashbroad_months;
