import React from "react";

type TableProps = {
  data?: any;
  title: any;
};

const ServiceDetail_Table = (props: TableProps) => {
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
          <td>2010001</td>
          <td>
            <div className="green"></div>Đã hoàn thành
          </td>
        </tr>
        {/* -------------------- 2 ---------------- */}
        <tr>
          <td>2010002</td>
          <td>
            <div className="green"></div>Đã hoàn thành
          </td>
        </tr>
        {/* -------------------- 3 ---------------- */}
        <tr>
          <td>2010003</td>
          <td>
            <div className="blue"></div>Đang thực hiện
          </td>
        </tr>
        {/* -------------------- 4 ---------------- */}
        <tr>
          <td>2010004</td>
          <td>
            <div className="gray"></div>Vắng
          </td>
        </tr>
        {/* -------------------- 5 ---------------- */}
        <tr>
          <td>2010005</td>
          <td>
            <div className="green"></div>Đã hoàn thành
          </td>
        </tr>
        {/* -------------------- 6 ---------------- */}
        <tr>
          <td>2010006</td>
          <td>
            <div className="bue"></div>Đang thực hiện
          </td>
        </tr>
        {/* -------------------- 7 ---------------- */}
        <tr>
          <td>2010007</td>
          <td>
            <div className="gray"></div>Vắng
          </td>
        </tr>
        {/* -------------------- 1 ---------------- */}
        <tr>
          <td>2010008</td>
          <td>
            <div className="green"></div>Đã hoàn thành
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ServiceDetail_Table;
