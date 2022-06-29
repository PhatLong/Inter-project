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
import { FaEllipsisV } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../shared/assets/Logoalta.png";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/dashbroad",
      name: "Dashbroad",
      icon: <BsColumnsGap />,
    },
    {
      path: "/device",
      name: "Thiết bị",
      icon: <BsDisplay />,
    },
    {
      path: "/service",
      name: "Dịch vụ",
      icon: <BsWhatsapp />,
    },
    {
      path: "/queue",
      name: "Cấp số",
      icon: <BsStack />,
    },
    {
      path: "/report",
      name: "Báo cáo",
      icon: <BsGraphUp />,
    },
  ];
  return (
    <div className="ssidebar_container">
      <div className="ssidebar">
        <div className="top_section">
          <img src={Logo} alt={"Logo"} />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            style={({ isActive }) => ({
              background: isActive ? "orange" : "white",
              color: isActive ? "white" : "#7E7D88",
            })}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <NavLink to="" key={7} className="link" id="system">
          <div className="icon">
            <BsNut />
          </div>
          <div className="link_text">
            Cài đặt hệ thống
            <FaEllipsisV />
          </div>
          <div className="dropdown-content">
            <Link to="/manage-role">
              <p>Quản lý vai trò</p>
            </Link>
            <Link to="/manage-account">
              <p>Quản lý tài khoản</p>
            </Link>
            <Link to="/user-log">
              <p>Nhật ký người dùng</p>
            </Link>
          </div>
        </NavLink>
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
