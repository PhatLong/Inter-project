import {
  BsCalendar3,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPlusSquareFill,
} from "react-icons/bs";
import { MenuItem, Select, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import Queue_Table from "../components/Queue_Table";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Queue = () => {
  const [active, setActive] = useState("all");
  const [SerName, setSerName] = useState("all");
  const [Source, setSource] = useState("all");

  const columns = [
    "STT",
    "Tên Khách hàng",
    "Tên dịch vụ",
    "Thời gian cấp",
    "Hạn sử dụng",
    "Trạng thái",
    "Nguồn cấp",
    "",
  ];

  return (
    <div className="main-background">
      <Topbar Title="Cấp số >" CurrentTitle="Danh sách cấp số" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý cấp số</h3>
        <div className="device_topcontent">
          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Tên dịch vụ
            </InputLabel>
            <Select
              className="service_select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"waiting"}>Đang chờ</MenuItem>
              <MenuItem value={"used"}>Đã sử dụng</MenuItem>
              <MenuItem value={"not_use"}>Bỏ qua</MenuItem>
            </Select>
          </div>
          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label2"
            >
              Tình trạng
            </InputLabel>
            <Select
              className="service_select"
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              value={SerName}
              onChange={(e) => setSerName(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"phu_khoa"}>Khám sản - Phụ khoa </MenuItem>
              <MenuItem value={"ham_mat"}>Khám răng hàm mặt</MenuItem>
              <MenuItem value={"mui_hong"}>Khám tai mũi họng</MenuItem>
            </Select>
          </div>
          <div className="device_select">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label3"
            >
              Nguồn cấp
            </InputLabel>
            <Select
              className="service_select"
              labelId="demo-simple-select-label3"
              id="demo-simple-select3"
              value={Source}
              onChange={(e) => setSource(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"kiosk"}>Kiosk</MenuItem>
              <MenuItem value={"systerm"}>Hệ thống</MenuItem>
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
        <div className="device_table">
          <Queue_Table title={columns} />
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
        <Link to="/add-queue">
          <div className="device_add">
            <BsFillPlusSquareFill style={{ width: 25, height: 25 }} />
            Cấp <br />
            số mới
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Queue;
