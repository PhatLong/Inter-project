import React from "react";
import DashBroad_Content from "../components/DashBroad_Content";
import Dashbroad_Overview from "../components/Dashbroad_Overview";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashbroad = () => {
  return (
    <div className="main-background">
      <Topbar CurrentTitle="Dashbroad" />
      <Sidebar />
      <DashBroad_Content />
      <Dashbroad_Overview />
    </div>
  );
};

export default Dashbroad;
