import React from "react";
import DashBroad_Content_W from "./components/DashBroad_Content_W";
import Dashbroad_Overview from "./components/Dashbroad_Overview";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

const Dashbroad_weeks = () => {
  return (
    <div className="main-background">
      <Topbar CurrentTitle="Dashbroad" />
      <Sidebar />
      <DashBroad_Content_W />
      <Dashbroad_Overview />
    </div>
  );
};

export default Dashbroad_weeks;
