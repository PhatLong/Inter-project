import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
  datasets: [
    {
      label: "Số lượng",
      data: [2800, 4300, 3400, 3700, 4100, 0, 6000],
      fill: true,
      backgroundColor: "#6695fb",
      pointBorderColor: "white",
      pointBorderWidth: 4,
      pointRadius: 6,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: { legend: { display: false } },
  layout: { padding: { bottom: 100 } },
  scales: {
    y: {
      ticks: {
        color: "#535261",
        font: {
          size: 14,
        },
      },
      grid: {
        color: "#243240",
      },
    },
    x: {
      ticks: {
        color: "#535261",
        font: {
          size: 14,
        },
      },
    },
  },
};

const Chart_Weeks = () => {
  return (
    <div className="chart_container">
      <div className="chart_info">
        <h2>
          Bảng thông kê theo tuần <h3> Tháng 11/2021</h3>
        </h2>
        <label>
          Xem theo
          <select className="dashbroad_dropdown">
            <option value="date">Ngày</option>
            <option selected value="week">
              Tuần
            </option>
            <option value="month">Tháng</option>
          </select>
        </label>
      </div>
      <div className="chart_main">
        <Line data={data} options={options} />
      </div>
      <span>SL/Ngày</span>
    </div>
  );
};

export default Chart_Weeks;
