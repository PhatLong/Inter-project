import React from "react";
import {
  BsArrowDown,
  BsArrowUp,
  BsBookmarkStar,
  BsCalendar,
  BsCalendarCheck,
  BsFillPeopleFill,
} from "react-icons/bs";

const BroadType = () => {
  return (
    <div className="broadtype_container">
      <div className="broads">
        <div className="broad_name">
          <div className="icon_wrapper1">
            <BsCalendar className="icon1" />
          </div>
          <h4>
            Số thứ tự <h3>đã cấp</h3>
          </h4>
        </div>
        <div className="broad_number">
          <h1>4.221</h1>
          <div className="number_wrapper1">
            <BsArrowUp /> 32,41%
          </div>
        </div>
      </div>
      <div className="broads">
        <div className="broad_name">
          <div className="icon_wrapper2">
            <BsCalendarCheck className="icon2" />
          </div>
          <h4>
            Số thứ tự <h3>đã cấp</h3>
          </h4>
        </div>
        <div className="broad_number">
          <h1>3.721</h1>
          <div className="number_wrapper2">
            <BsArrowDown /> 32,41%
          </div>
        </div>
      </div>
      <div className="broads">
        <div className="broad_name">
          <div className="icon_wrapper3">
            <BsFillPeopleFill className="icon3" />
          </div>
          <h4>
            Số thứ tự <h3>đã cấp</h3>
          </h4>
        </div>
        <div className="broad_number">
          <h1>468</h1>
          <div className="number_wrapper1">
            <BsArrowUp /> 56,41%
          </div>
        </div>
      </div>
      <div className="broads">
        <div className="broad_name">
          <div className="icon_wrapper4">
            <BsBookmarkStar className="icon4" />
          </div>
          <h4>
            Số thứ tự <h3>đã cấp</h3>
          </h4>
        </div>
        <div className="broad_number">
          <h1>32</h1>
          <div className="number_wrapper2">
            <BsArrowUp /> 22,41%
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadType;
