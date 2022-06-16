import React from "react";

type TableProps = {
  data?: any;
  title: any;
};

const Device_Table = (props: TableProps) => {
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
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------1-------------- */}
        <tr>
          <td>2010001</td>
          <td>Lê Huỳnh Ái Vân</td>
          <td>Khám tim mạch</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="blue"></div>Đang chờ
          </td>
          <td>Kiosk</td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Device_Table;
