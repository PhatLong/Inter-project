import React from "react";
import RsPassContent from "../components/RsPassContent";
import ForgetPassSidebar from "../components/ForgetPassSidebar";
import "../styles.css";

const ResetPass: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <ForgetPassSidebar />
        <RsPassContent />
      </div>
    </div>
  );
};

export default ResetPass;
