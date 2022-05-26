import React from "react";
import PersonInfor from "../components/PersonInfor";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Profile = () => {
  return (
    <div className="main-background">
      <Topbar />
      <Sidebar />
      <PersonInfor />
    </div>
  );
};

export default Profile;
