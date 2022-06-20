import React from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Queue_Detail = () => {
  return (
    <div className="main-background">
      <Topbar Title="Cấp số > Danh sách cấp số >" CurrentTitle="Chi tiết" />
      <Sidebar />
      <div className="QDetail_container">
        <h3 className="content_title">Quản lý cấp số</h3>
        <div className="QDetail_form">
          <h3>Thông tin cấp số</h3>
          <div className="content">
            <div className="left_content">
              <div className="title">
                <p>Họ tên:</p>
                <p>Tên dịch vụ:</p>
                <p>Số thứ tự:</p>
                <p>Thời gian cấp:</p>
                <p>Hạn sử dụng:</p>
              </div>
              <div className="data">
                <p>Nguyễn Thị Dung</p>
                <p>Khám tim mạch</p>
                <p>2001201</p>
                <p>14:35 - 07/11/2021</p>
                <p>18:00 - 07/11/2021</p>
              </div>
            </div>
            <div className="right_content">
              <div className="title">
                <p>Nguồn cấp:</p>
                <p>Trạng thái:</p>
                <p>Số điện thoại:</p>
                <p>Địa chỉ Email:</p>
              </div>
              <div className="data">
                <p>Kiosk</p>
                <p>
                  <div className="blue"></div> Đang chờ
                </p>
                <p>0948523623</p>
                <p>nguyendung@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/service">
          <div className="device_add" id="item6">
            <BsFillArrowLeftSquareFill style={{ width: 25, height: 25 }} />
            Quay lại
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Queue_Detail;
