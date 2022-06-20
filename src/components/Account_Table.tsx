import React from "react";
type TableProps = {
  data?: any;
  title: any;
};

const Account_Table = (props: TableProps) => {
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
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>tuyetnguyen@12</td>
          <td>Nguyen Văn A</td>
          <td>0919256712</td>
          <td>tuyetnguyen123@gmail.com</td>
          <td>Kế toán</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <a href="/update-service">Cập nhật</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Account_Table;
