import { InputLabel } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Role_Table from "../components/Role_Table";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const ManageRole = () => {
  const columns = ["Tên vai trò", "Số người dùng", "Mô tả", ""];

  return (
    <div className="main-background">
      <Topbar Title="Cài đặt hệ thống >" CurrentTitle="Quản lý vai trò" />
      <Sidebar />
      <div className="role_container">
        <div className="role-top">
          <h3 className="content_title">Danh sách vai trò</h3>
          <div className="service_search">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Từ khóa
            </InputLabel>
            <SearchBar value={""} placeholder="Nhập từ khóa" />
          </div>
        </div>
        <div className="role_table">
          <Role_Table title={columns} />
        </div>
        <Link to="/add-service">
          <div className="device_add">
            <BsFillPlusSquareFill style={{ width: 25, height: 25 }} />
            Thêm <br />
            vai trò
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ManageRole;
