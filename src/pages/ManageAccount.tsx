import { MenuItem, Select, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MaterialTable from "material-table";
import SearchBar from "material-ui-search-bar";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPlusSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Account_Table from "../components/Account_Table";

const ManageAccount = () => {
  const [active, setActive] = useState("all");

  const columns = [
    "Tên đăng nhập",
    "Họ tên",
    "Số ddienj thoại",
    "Email",
    "Vai trò",
    "Trạng thái hoạt động",
    "",
  ];

  return (
    <div className="main-background">
      <Topbar Title="Cài đặt hệ thống >" CurrentTitle="Quản lý tài khoản" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Danh sách thiết bị</h3>
        <div className="device_topcontent">
          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Tên vai trò
            </InputLabel>
            <Select
              className="select_list"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"Accountant"}>Kế toán</MenuItem>
              <MenuItem value={"Management"}>Quản lý</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
            </Select>
          </div>

          <div className="device_search" id="item9">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Từ khóa
            </InputLabel>
            <SearchBar value={""} placeholder="Nhập từ khóa" />
          </div>
        </div>
        <div className="device_table">
          <Account_Table title={columns} />
        </div>
        <div className="table_pages">
          <BsFillCaretLeftFill />
          <span className="active_page">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>...</span>
          <span>10</span>
          <BsFillCaretRightFill />
        </div>
        <Link to="/update-account">
          <div className="device_add">
            <BsFillPlusSquareFill style={{ width: 25, height: 25 }} />
            Thêm <br />
            tài khoản
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ManageAccount;
