import { MenuItem, Select, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MaterialTable from "material-table";
import SearchBar from "material-ui-search-bar";
import Device_Table from "../components/Device_Table";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPlusSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    age: 23,
    year: 2019,
  },
  {
    id: 2,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 6678901234,
    age: 17,
    year: 2020,
  },
  {
    id: 3,
    name: "David",
    email: "david342@gmail.com",
    phone: 6312345678,
    age: 34,
    year: 2019,
  },
  {
    id: 4,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9787654321,
    age: 20,
    year: 2021,
  },
];

const Device = () => {
  const [active, setActive] = useState("all");
  const [connect, setConnect] = useState("all");
  // const [filteredData, setFilteredData] = useState(empList);

  const columns = [
    "Mã thiết bị",
    "Tên thiết bị",
    "Địa chỉ IP",
    "Trạng thái hoạt động",
    "Trạng thái kết nối",
    "Dịch vụ sử dụng",
    "",
    "",
  ];

  // useEffect(() => {
  //   setFilteredData(
  //     active === "all"
  //       ? empList
  //       : empList.filter((dt: any) => dt.active === active)
  //   );
  // }, [active]);

  return (
    <div className="main-background">
      <Topbar Title="Thiết bị >" CurrentTitle="Danh sách thiết bị" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Danh sách thiết bị</h3>
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
              Trạng thái kết nối
            </InputLabel>
            <Select
              className="select_list"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={connect}
              onChange={(e) => setConnect(e.target.value)}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"is_connect"}>Kết nối</MenuItem>
              <MenuItem value={"not_connect"}>Mất kết nối</MenuItem>
            </Select>
          </div>
          <div className="device_search">
            <InputLabel
              className="InputLabel"
              id="demo-simple-select-standard-label"
            >
              Từ khóa
            </InputLabel>
            <SearchBar
              value={""}
              placeholder="Nhập từ khóa"
              // onChange={(e) => e.setActive({ value: newValue })}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          </div>
        </div>
        <div className="device_table">
          {/* <MaterialTable
            title="Employee Data"
            data={filteredData}
            columns={columns}
          /> */}
          <Device_Table title={columns} />
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
        <Link to="/add-device">
          <div className="device_add">
            <BsFillPlusSquareFill style={{ width: 25, height: 25 }} />
            Thêm <br />
            thiết bị
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Device;
