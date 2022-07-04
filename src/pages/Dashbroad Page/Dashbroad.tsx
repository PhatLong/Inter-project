import React from "react";
import DashBroad_Content from "./components/DashBroad_Content";
import Dashbroad_Overview from "./components/Dashbroad_Overview";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";
import "./styles.css";

const Dashbroad = () => {
  return (
    <div className="main-background">
      <Sidebar />
      <DashBroad_Content />
      <Dashbroad_Overview />
      <div style={{ position: "absolute", width: "100%" }}>
        <Topbar CurrentTitle="Dashbroad" />
      </div>
    </div>
  );
};

export default Dashbroad;
