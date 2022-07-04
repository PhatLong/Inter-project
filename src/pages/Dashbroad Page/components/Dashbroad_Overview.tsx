import React, { useState } from "react";
import Calendar from "react-calendar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsChatQuote, BsDisplay, BsStack } from "react-icons/bs";

const Dashbroad_Overview = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => {
    setDate(date);
  };

  const Device_Percentage = 90;
  const Service_Percentage = 76;
  const Queue_Percentage = 86;

  return (
    <div className="overview_container">
      <h3 className="content_title">Tổng quan</h3>
      <div className="status_box">
        <div className="outerline">
          <CircularProgressbar
            value={Device_Percentage}
            strokeWidth={5}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: "#FF7506",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="innerline">
          <CircularProgressbar
            value={100 - Device_Percentage}
            strokeWidth={5}
            text={`${Device_Percentage}%`}
            styles={buildStyles({
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: "#7E7D88",
              textColor: "#535261",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="status_box_info">
          <div className="info_1">
            <h3>4.221</h3>
            <p>
              <BsDisplay /> Thiết bị
            </p>
          </div>
          <div className="info_2">
            <p>&bull; Đang hoạt động</p>
            <p>&bull; Ngưng hoạt động</p>
          </div>
          <div className="info_3">
            <p>3.799</p>
            <p>422</p>
          </div>
        </div>
      </div>
      <div className="status_box">
        <div className="outerline">
          <CircularProgressbar
            value={Service_Percentage}
            strokeWidth={5}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: "#4277FF",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="innerline">
          <CircularProgressbar
            value={100 - Service_Percentage}
            strokeWidth={5}
            text={`${Service_Percentage}%`}
            styles={buildStyles({
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: "#7E7D88",
              textColor: "#535261",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="status_box_info">
          <div className="info_1">
            <h3>276</h3>
            <p style={{ color: "#4277FF" }}>
              <BsChatQuote /> Dịch vụ
            </p>
          </div>
          <div className="info_2">
            <p>&bull; Đang hoạt động</p>
            <p>&bull; Ngưng hoạt động</p>
          </div>
          <div className="info_3" style={{ color: "#4277FF" }}>
            <p>210</p>
            <p>66</p>
          </div>
        </div>
      </div>
      <div className="status_box">
        <div className="outerline">
          <CircularProgressbar
            value={Queue_Percentage}
            strokeWidth={5}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: "#35C75A",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="innerline">
          <CircularProgressbar
            value={100 - 10 - Queue_Percentage}
            strokeWidth={5}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: "#7E7D88",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="innerline_2">
          <CircularProgressbar
            value={10}
            strokeWidth={5}
            text={`${Queue_Percentage}%`}
            styles={buildStyles({
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: "#F178B6",
              textColor: "#535261",
              trailColor: "#EAEAEC",
            })}
          />
        </div>
        <div className="status_box_info">
          <div className="info_1">
            <h3>4.221</h3>
            <p style={{ color: "#35C75A" }}>
              <BsStack /> Dịch vụ
            </p>
          </div>
          <div className="info_2">
            <p>&bull; Đang hoạt động</p>
            <p>&bull; Ngưng hoạt động</p>
            <p>&bull; Bỏ qua</p>
          </div>
          <div className="info_3" style={{ color: "#35C75A" }}>
            <p>3.721</p>
            <p>468</p>
            <p>32</p>
          </div>
        </div>
      </div>
      <div className="calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default Dashbroad_Overview;
