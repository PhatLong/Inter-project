import React from "react";
import PersonInfor from "../components/PersonInfor";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import Topbar from "../../../layout/Topbar/Topbar";
import "../styles.css";

const Profile = () => {
  return (
    <div className="main-background">
      <Topbar CurrentTitle="Thông tin cá nhân" />
      <Sidebar />
      <PersonInfor />
    </div>
  );
};

export default Profile;
