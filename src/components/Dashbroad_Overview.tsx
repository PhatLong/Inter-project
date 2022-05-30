import React, { useState } from "react";
import Calendar from "react-calendar";

const Dashbroad_Overview = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  };
  return (
    <div className="overview_container">
      <h3 className="content_title">Tổng quan</h3>
      <div className="status_box">Thiết bị</div>
      <div className="status_box">Dịch vụ</div>
      <div className="status_box">Cấp số</div>
      <div className="calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default Dashbroad_Overview;
