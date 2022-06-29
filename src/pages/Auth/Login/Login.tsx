import React from "react";
import Login_Content from "../components/Login_Content";
import Login_Sidebar from "../components/Login_Sidebar";
import "../styles.css";

const SignUp: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Login_Sidebar />
        <Login_Content />
      </div>
    </div>
  );
};
export default SignUp;
