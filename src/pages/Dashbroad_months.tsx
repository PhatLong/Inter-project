import React from "react";
import DashBroad_Content from "../components/DashBroad_Content";
import DashBroad_Content_M from "../components/DashBroad_Content_M";
import Dashbroad_Overview from "../components/Dashbroad_Overview";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashbroad_months = () => {
  return (
    <div className="main-background">
      <Topbar CurrentTitle="Dashbroad" />
      <Sidebar />
      <DashBroad_Content_M />
      <Dashbroad_Overview />
    </div>
  );
};

export default Dashbroad_months;
