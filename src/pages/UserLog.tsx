import { InputLabel } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import {
  BsCalendar3,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillFileEarmarkArrowDownFill,
} from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UserLog_Table from "../components/UserLog_Table";

const UserLog = () => {
  const columns = [
    "Tên đăng nhập",
    "Thời gian tác động",
    "IP thực hiện",
    "Thao tác thực hiện",
  ];

  return (
    <div className="main-background">
      <Topbar Title="Báo cáo >" CurrentTitle="Lập báo cáo" />
      <Sidebar />
      <div className="report_container">
        <div className="device_topcontent">
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
        <div className="report_table">
          <UserLog_Table title={columns} />
        </div>
        <div className="table_pages" id="report">
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
      </div>
    </div>
  );
};

export default UserLog;
