import {
  BsCalendar3,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPlusSquareFill,
} from "react-icons/bs";
import { MenuItem, Select, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import Service_Table from "../components/Service_Table";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const Service = () => {
  const [active, setActive] = useState("all");

  const columns = [
    "Mã dịch vụ",
    "Tên dịch vụ",
    "Mô tả",
    "Trạng thái Hoạt động",
    "",
    "",
  ];

  return (
    <div className="main-background">
      <Topbar Title="Dịch vụ >" CurrentTitle="Danh sách dịch vụ" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý dịch vụ</h3>
        <div className="device_topcontent">
          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Trạng thái hoạt động
            </InputLabel>
            <Select
              className="select_list"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"is_active"}>Hoạt động</MenuItem>
              <MenuItem value={"not_active"}>Ngưng hoạt động</MenuItem>
            </Select>
          </div>

          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Chọn thời gian
            </InputLabel>
            <div className="calender_wrap">
              <div className="date_selection">
                <BsCalendar3 /> 10/10/2021
              </div>
              <BsFillCaretRightFill className="calender_arrow" />
              <div className="date_selection">
                <BsCalendar3 /> 18/10/2021
              </div>
            </div>
          </div>
          <div className="device_search">
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
          <Service_Table title={columns} />
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
        <Link to="/add-service">
          <div className="device_add">
            <BsFillPlusSquareFill style={{ width: 25, height: 25 }} />
            Thêm <br />
            dịch vụ
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Service;
