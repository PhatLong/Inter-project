import React from "react";
// import "../App.css";
import {
  BsBoxArrowRight,
  BsColumnsGap,
  BsDisplay,
  BsGraphUp,
  BsNut,
  BsStack,
  BsWhatsapp,
} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logoalta.png";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashbroad",
      icon: <BsColumnsGap />,
    },
    {
      path: "/device",
      name: "Thiết bị",
      icon: <BsDisplay />,
    },
    {
      path: "/",
      name: "Dịch vụ",
      icon: <BsWhatsapp />,
    },
    {
      path: "/",
      name: "Cấp số",
      icon: <BsStack />,
    },
    {
      path: "/",
      name: "Báo cáo",
      icon: <BsGraphUp />,
    },
    {
      path: "/",
      name: "Cài đặt hệ thống ",
      icon: <BsNut />,
    },
  ];
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="top_section">
          <img src={Logo} alt={"Logo"} />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            // style={({ isActive }) => ({
            //   color: isActive ? "orange" : "white",
            //   background: isActive ? "white" : "#7E7D88",
            // })}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <button className="logout_btn">
          <Link className="logout_link" to={"/"}>
            <BsBoxArrowRight /> Đăng xuất
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
