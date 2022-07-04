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
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="red"></div>Ngưng hoạt động
          </td>
          <td>
            <div className="red"></div>Mất kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* -------------2-------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="green"></div>Kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* --------------3---------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="red"></div>Mất kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* --------------4--------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="red"></div>Ngưng hoạt động
          </td>
          <td>
            <div className="green"></div>Kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* ----------------5--------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="red"></div>Mất kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* --------------6-------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="green"></div>Kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* ---------------7------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="red"></div>Ngưng hoạt động
          </td>
          <td>
            <div className="green"></div>Kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* ---------------8------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="green"></div>Kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
        {/* --------------9------------- */}
        <tr>
          <td>KIO_01</td>
          <td>Kiosk</td>
          <td>192.168.1.10</td>
          <td>
            <div className="green"></div>Hoạt động
          </td>
          <td>
            <div className="red"></div>Mất kết nối
          </td>
          <td>
            Khám tim mạch, Khám mắt... <br />
            <a href="/device">Xem thêm</a>
          </td>
          <td>
            <a href="/device-detail">Chi tiết</a>
          </td>
          <td>
            <a href="/update-device">Cập nhật</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

// const Device_Table = (props: TableProps) => {
//   const columns = props.data[0] && Object.keys(props.data[0]);
//   return (
//     <table cellPadding={0} cellSpacing={0} style={{ borderRadius: 5 }}>
//       <thead>
//         <tr>
//           {props.data[0] && columns.map((heading: any) => <th>{heading}</th>)}
//         </tr>
//       </thead>
//       <tbody>
//         {props.data.map((row: any) => (
//           <tr>
//             {columns.map((column: any) => (
//               <td>{row[column]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

export default Device_Table;
