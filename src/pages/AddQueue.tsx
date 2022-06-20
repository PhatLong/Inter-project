import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewQueue from "../components/NewQueue";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AddQueue = () => {
  const [active, setActive] = useState("");
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <div className="main-background">
      <Topbar Title="Cấp số > Danh sách cấp số >" CurrentTitle="Cấp số mới" />
      <Sidebar />
      <div className="device_container">
        <h3 className="content_title">Quản lý cấp số</h3>
        <div className="add_queueform">
          <h1>CẤP SỐ MỚI</h1>
          <h2>Dịch vụ khách hàng lựa chọn</h2>
          <div>
            <Select
              className="queue_select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              placeholder="Chọn dịch vụ"
              onChange={(e) => setActive(e.target.value)}
              displayEmpty={true}
              renderValue={
                active !== "" ? undefined : () => <p>Chọn dịch vụ</p>
              }
            >
              <MenuItem value={"tim_mach"}>Khám tim mạch</MenuItem>
              <MenuItem value={"phu_khoa"}>Khám sản - Phụ khoa </MenuItem>
              <MenuItem value={"ham_mat"}>Khám răng hàm mặt</MenuItem>
              <MenuItem value={"mui_hong"}>Khám tai mũi họng</MenuItem>
            </Select>
          </div>
          <div className="addqueue_button">
            <Link to="/queue">
              <button className="addqueue_cancelbtn">Hủy bỏ</button>
            </Link>
            <button
              className="addqueue_addbtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              In số
            </button>
          </div>
        </div>
      </div>
      {OpenModal && <NewQueue closeModal={setOpenModal} />}
    </div>
  );
};

export default AddQueue;
