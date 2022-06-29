import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import MockData from "../MOCK_DATA.json";

type TableProps = {
  data?: any;
  title?: any;
};

const Report_Table = (props: TableProps) => {
  const [Data, setData] = useState(MockData);
  const [State, setState] = useState("ASC");

  const sorting = (col: any) => {
    if (State === "ASC") {
      const sorted = [...Data].sort((a: any, b: any) =>
        a[col] > b[col] ? 1 : -1
      );
      setData(sorted);
      setState("DSC");
    }
    if (State === "DSC") {
      const sorted = [...Data].sort((a: any, b: any) =>
        a[col] < b[col] ? 1 : -1
      );
      setData(sorted);
      setState("ASC");
    }
  };

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th onClick={() => sorting("Number")} style={{ width: "226px" }}>
            <div className="report_head">
              Số thứ tự
              <FaSort />
            </div>
          </th>
          <th onClick={() => sorting("Name")} style={{ width: "226px" }}>
            <div className="report_head">
              Tên dịch vụ
              <FaSort />
            </div>
          </th>
          <th onClick={() => sorting("Date")} style={{ width: "226px" }}>
            <div className="report_head">
              Thời gian cấp
              <FaSort />
            </div>
          </th>
          <th onClick={() => sorting("Status")} style={{ width: "226px" }}>
            <div className="report_head">
              Tình trạng
              <FaSort />
            </div>
          </th>
          <th onClick={() => sorting("Source")} style={{ width: "226px" }}>
            <div className="report_head">
              Nguồn cấp
              <FaSort />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Data.map((d: any) => (
          <tr>
            <td>{d.Number}</td>
            <td>{d.Name}</td>
            <td>{d.Date}</td>
            {d.Status === "Đã sử dụng" ? (
              <td>
                {d.Status}
                <p>1</p>
              </td>
            ) : (
              " "
            )}
            {d.Status === "Đang chờ" ? (
              <td>
                {d.Status}
                <p>2</p>
              </td>
            ) : (
              " "
            )}
            {d.Status === "Bỏ qua" ? (
              <td>
                {d.Status}
                <p>3</p>
              </td>
            ) : (
              " "
            )}
            <td>{d.Source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Report_Table;
