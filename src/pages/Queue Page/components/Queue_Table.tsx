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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------2-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------3-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------4-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------5-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------6-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------7-------------- */}
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
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------8-------------- */}
        <tr>
          <td>2010008</td>
          <td>Phạm Văn Mạnh</td>
          <td>Khám tổng quát</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="red"></div>Bỏ qua
          </td>
          <td>Hệ thống</td>
          <td>
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
        {/* -------------9-------------- */}
        <tr>
          <td>2010009</td>
          <td>Lê Thị Cẩm Tiên</td>
          <td>Khám tai mũi họng</td>
          <td>14:35 - 07/11/2021</td>
          <td>14:35 - 12/11/2021</td>
          <td>
            <div className="gray"></div>Đã sử dụng
          </td>
          <td>Hệ thống</td>
          <td>
            <a href="/queue-detail">Chi tiết</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Device_Table;
