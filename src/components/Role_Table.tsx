import React from "react";

type TableProps = {
  data?: any;
  title: any;
};

const Role_Table = (props: TableProps) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          {props.title.map((headerItem: any, index: any) => (
            <th key={index} style={{ width: "80px" }}>
              {headerItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Kế toán</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Bác sĩ</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Lễ Tân</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Quản lý</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Admin</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>Superadmin</td>
          <td>6</td>
          <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Role_Table;
