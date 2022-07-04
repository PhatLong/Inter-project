import React from "react";

type TableProps = {
  data?: any;
  title: any;
};

const UserLog_Table = (props: TableProps) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          {props.title.map((headerItem: any, index: any) => (
            <th key={index} style={{ width: "100px" }}>
              {headerItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
        <tr>
          <td>tuyetnguyen@12</td>
          <td>01/12/2021 15:12:17</td>
          <td>192.168.3.1</td>
          <td>Cập nhật thông tin dịch vụ DV_01</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserLog_Table;
