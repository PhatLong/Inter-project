import React, { useState } from "react";
import {
  BsCalendar3,
  BsFillArrowLeftSquareFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsPencilFill,
} from "react-icons/bs";
import { MenuItem, Select, InputLabel } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";
import ServiceDetail_Table from "./components/ServiceDetail_Table";
import { Link } from "react-router-dom";

const Service_Detail = () => {
  const [active, setActive] = useState("all");

  const columns = ["Số thứ tự", "Trạng thái"];

  return (
    <div className="main-background">
      <Topbar Title="Dịch vụ > Danh sách dịch vụ >" CurrentTitle="Chi tiết" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý dịch vụ</h3>
        <div className="servicedetail_content">
          <h3>Thông tin dịch vụ</h3>
          <div className="info">
            <p>
              Mã dịch vụ: <span>201</span>
            </p>
            <p>
              Tên dịch vụ: <span>Khám tim mạch</span>
            </p>
            <p>
              Mô tả: <span>Chuyên các bệnh lý về tim</span>
            </p>
          </div>
          <h3>Quy tắc cấp số</h3>
          <div className="rule">
            <div id="item1">
              <p>Tăng tự động:</p>
              <input type="text" value={"0001"} />
              <p>đến</p>
              <input type="text" value={"9999"} />
            </div>
            <div>
              <p>Prefix:</p>
              <input type="text" value={"0001"} />
            </div>
            <p>Reset mỗi ngày</p>
            <p>Ví dụ: 201-2001</p>
          </div>
        </div>
        <div className="servicedetail_table">
          <div className="service_topcontent">
            <div className="device_select">
              <InputLabel
                className="InputLabel"
                id="demo-simple-select-standard-label"
              >
                Trạng thái
              </InputLabel>
              <Select
                className="service_select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value={"all"}>Tất cả</MenuItem>
                <MenuItem value={"is_complete"}>Đã hoàn thành</MenuItem>
                <MenuItem value={"processing"}>Đang thực hiện</MenuItem>
                <MenuItem value={"not_active"}>Vắng</MenuItem>
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
              <SearchBar placeholder="Nhập từ khóa" />
            </div>
          </div>
          <div className="table">
            <ServiceDetail_Table title={columns} />
          </div>
          <div className="D_table_pages">
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
        <Link to="/update-service">
          <div className="device_add" id="item4">
            <BsPencilFill className="update_icon" />
            Cập nhật danh sách
          </div>
        </Link>
        <Link to="/service">
          <div className="device_add" id="item5">
            <BsFillArrowLeftSquareFill style={{ width: 25, height: 25 }} />
            Quay lại
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Service_Detail;
