import React from "react";

type TableProps = {
  data?: any;
  title: any;
};

const Service_Table = (props: TableProps) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          {props.title.map((headerItem: any, index: any) => (
            <th key={index}>{headerItem}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* --------------------- 2 --------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* ------------------- 3 ------------------ */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="red"></div>Ngưng hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* ---------------- 4 -------------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* ----------------- 5 --------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* ------------- 6 ---------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------- 7------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* ------------ 8 -------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="red"></div>Ngưng Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* --------------- 9 ---------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>Mô tả dịch vụ 1</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/service-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Service_Table;
