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
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      label: "Số lượng",
      data: [
        2800, 3300, 3400, 3700, 4100, 5000, 6000, 5500, 4900, 5000, 4500, 4300,
      ],
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
          max: 6000,
          min: 0,
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

const Chart_Months = () => {
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
            <option value="week">Tuần</option>
            <option selected value="month">
              Tháng
            </option>
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

export default Chart_Months;
