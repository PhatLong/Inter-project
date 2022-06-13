import React from "react";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../assets/avatar.png";

type TopbarProps = {
  Title?: string;
  CurrentTitle: string;
};

const Topbar = (props: TopbarProps): JSX.Element => {
  const [isActive, setActive] = React.useState(false);

  const toggle = () => {
    isActive ? setActive(false) : setActive(true);
  };

  return (
    <div>
      <Nav>
        <Navleft>
          <h3 className="topbar_title">{props.Title}</h3>
          <h3>{props.CurrentTitle}</h3>
        </Navleft>
        <Navright>
          <button onClick={toggle} className={isActive ? "button_active" : ""}>
            <BsBellFill className="bell_icon" />
            <ul className={isActive ? "notification-menu" : "notice_active"}>
              <div className="notification-title">
                <span>Thông báo</span>
              </div>
              <li>
                <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Nguyễn Thiên Chinh</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Võ Thị Kim Liên</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Hoàng Nguyễn Quốc Huy</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Võ Ngọc Lan Anh</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Nguyễn Thị Trúc Anh</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                <hr />
              </li>
              <li>
                <h3>Người dùng: Nguyễn Thị Thùy Dung</h3>
                <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
              </li>
            </ul>
          </button>
          <Link to="/profile" className="profile_pic">
            <img src={Avatar} alt="" />
          </Link>
          <h3>
            Xin chào
            <br /> <h2>Lê Quỳnh Ái Vân</h2>
          </h3>
        </Navright>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  position: absolute;
  background-color: transparent;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  z-index: 10;
  margin-left: 230px;
  width: 82%;
`;

const Navleft = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ff9138;
  display: flex;
  aligin-items: center;
  padding: 1rem;

  .topbar_title {
    color: #7e7d88;
    margin-right: 8px;
  }
`;

const Navright = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;

  button {
    background: #fff2e7;
    border-radius: 32px;
    border: none;
    color: #ffac6a;
    width: 35px;
    height: 35px;
    padding: 3px;
    margin-right: 8px;
  }

  .button_active {
    background: #ff7506;
    border-radius: 32px;
    border: none;
    color: #ffffff;
    width: 35px;
    height: 35px;
    padding: 3px;
    margin-right: 8px;
  }

  .bell_icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .notification-menu {
    position: absolute;
    top: 60px;
    left: 900px;
    background: #ffffff;
    border: #989898;
    box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
    border-radius: 10px;
    list-style: none;
    width: 360px;
    height: 500px;
    display: block;
    text-align: left;
    overflow-y: scroll;
  }

  .notice_active {
    display: none;
  }

  .notification-title {
    width: 356px;
    height: 48px;
    background: #ff9138;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    display: flex;
  }

  .notification-title span {
    margin: 0.5rem 0 0 1rem;
  }

  li {
    padding: 15px;
    height: 45px;
  }

  li h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #bf5805;
  }

  li p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #535261;
  }

  .notification-menu::-webkit-scrollbar {
    width: 4px;
    height: 40px;
  }

  .notification-menu::-webkit-scrollbar-track {
    background: white;
  }

  .notification-menu::-webkit-scrollbar-thumb {
    background: #ffc89b;
    border-radius: 43px;
  }

  hr {
    margin-top: 10px;
    background: #d4d4d7;
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: fill;
    border-radius: 50%;
    margin-right: 10px;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7e7d88;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #535261;
  }

  .profile_pic {
    cursor: pointer;
  }
`;

export default Topbar;
