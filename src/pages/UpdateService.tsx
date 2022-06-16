import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const UpdateService = () => {
  const [isSelected, setIsSelected] = useState<string[]>([]);
  const [Code, setCode] = useState<string>("201");
  const [Name, setName] = useState<string>("Khám tim mạch");
  const [Desc, setDesc] = useState<string>("Mô tả dịch vụ");

  const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
    setName(event.target.value);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = isSelected.indexOf(event.target.value);
    if (index === -1) {
      setIsSelected([...isSelected, event.target.value]);
    } else {
      setIsSelected(
        isSelected.filter((isSelected) => isSelected !== event.target.value)
      );
    }
  };

  return (
    <div className="main-background">
      <Topbar
        Title="Dịch vụ > Danh sách dịch vụ > Chi tiết >"
        CurrentTitle="Cập nhật"
      />
      <Sidebar />
      <div className="service_container">
        <h3 className="content_title">Quản lý dịch vụ</h3>
        <div className="add_serviceform">
          <h3 className="form-title">Thông tin dịch vụ</h3>
          <div className="add_serviceWrapper">
            <div className="left-content">
              <div>
                <label>
                  Mã dịch vụ: <span>*</span>
                </label>
                <input
                  type="String"
                  value={Code}
                  onChange={(event) => setCode(event.target.value)}
                />
              </div>
              <div>
                <label>
                  Tên dịch vụ: <span>*</span>
                </label>
                <input
                  type="String"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="service_description">
              <label>Mô tả:</label>
              <textarea
                value={Desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
          </div>
          <h3 className="form-title">Quy tắc cấp số</h3>
          <div className="checkbox_group">
            <Box>
              <FormControl>
                <FormGroup>
                  <div id="item1">
                    <FormControlLabel
                      label="Tăng tự động từ:"
                      control={
                        <Checkbox
                          value="123"
                          checked={isSelected.includes("123")}
                          onChange={handleOnChange}
                          style={{
                            color: "#4277FF",
                          }}
                        />
                      }
                    />
                    <input type="text" value={"0001"} />
                    <p>đến</p>
                    <input type="text" value={"9999"} />
                  </div>
                  <div>
                    <FormControlLabel
                      label="Prefix:"
                      control={
                        <Checkbox
                          value="Prefix"
                          checked={isSelected.includes("Prefix")}
                          onChange={handleOnChange}
                          style={{
                            color: "#4277FF",
                          }}
                        />
                      }
                    />
                    <input type="text" value={"0001"} />
                  </div>
                  <div>
                    <FormControlLabel
                      label="Surfix:"
                      control={
                        <Checkbox
                          value="Surfix"
                          checked={isSelected.includes("Surfix")}
                          onChange={handleOnChange}
                          style={{
                            color: "#4277FF",
                          }}
                        />
                      }
                    />
                    <input type="text" value={"0001"} />
                  </div>
                  <div>
                    <FormControlLabel
                      label="Reset mỗi ngày"
                      control={
                        <Checkbox
                          value="Reseted"
                          checked={isSelected.includes("Reseted")}
                          onChange={handleOnChange}
                          style={{
                            color: "#4277FF",
                          }}
                        />
                      }
                    />
                  </div>
                </FormGroup>
              </FormControl>
            </Box>
          </div>
          <p className="notice">
            <span>*</span>Là trường thông tin bắt buộc
          </p>
        </div>
        <div className="addform_button">
          <Link to="/service-detail">
            <button className="addform_cancelbtn">Hủy bỏ</button>
          </Link>
          <button className="addform_addbtn" type="submit">
            Thêm dịch vụ
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
