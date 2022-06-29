import React from "react";
import PersonInfor from "../components/PersonInfor";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
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
