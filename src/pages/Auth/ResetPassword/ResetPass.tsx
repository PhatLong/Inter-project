import React from "react";
import RsPassContent from "../components/RsPassContent";
import RsPassSidebar from "../components/RsPassSidebar";
import "../styles.css";

const ResetPass: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <RsPassSidebar />
        <RsPassContent />
      </div>
    </div>
  );
};

export default ResetPass;
