import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
} from "@mui/material";
import Sidebar from "../../../layout/Sidebar/Sidebar";
import Topbar from "../../../layout/Topbar/Topbar";
import { Link } from "react-router-dom";

const UpdateRole = () => {
  const [Name, setName] = useState<string>("Kế toán");
  const [Desc, setDesc] = useState<string>(
    "Chịu trách nhiệm thống kê số liệu và kiểm toán"
  );
  const [SelectedA, setSelectedA] = useState<string[]>([]);
  const [SelectedB, setSelectedB] = useState<string[]>([]);

  const handleOnChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = SelectedA.indexOf(event.target.value);
    if (index === -1) {
      setSelectedA([...SelectedA, event.target.value]);
    } else {
      setSelectedA(
        SelectedA.filter((SelectedA) => SelectedA !== event.target.value)
      );
    }
  };

  const handleOnChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = SelectedB.indexOf(event.target.value);
    if (index === -1) {
      setSelectedB([...SelectedB, event.target.value]);
    } else {
      setSelectedB(
        SelectedB.filter((SelectedB) => SelectedB !== event.target.value)
      );
    }
  };
  return (
    <div className="main-background">
      <Topbar
        Title="Cài đặt hệ thống > Quản lý vai trò >"
        CurrentTitle="Cập nhật vai trò"
      />
      <Sidebar />
      <div className="role_container_2">
        <h3 className="content_title">Danh sách vai trò</h3>
        <div className="role_form">
          <h3>Thông tin vai trò</h3>
          <div className="role_wrapper">
            <div className="left_content">
              <div>
                <label className="role_label">
                  Tên vai trò<span>*</span>
                </label>
                <input
                  type="string"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="role_description">
                <label>Mô tả:</label>
                <textarea
                  value={Desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              <p className="notice">
                <span>*</span>Là trường thông tin bắt buộc
              </p>
            </div>
            <div className="right_content">
              <label className="role_label">
                Phân quyền chức năng <span>*</span>
              </label>
              <div className="role_select_wrap">
                <h3>Nhóm chức năng A</h3>
                <div className="checkbox_group">
                  <Box>
                    <FormControl>
                      <FormGroup>
                        <div>
                          <FormControlLabel
                            label="Tất cả"
                            control={
                              <Checkbox
                                value="all"
                                defaultChecked
                                // checked={SelectedA.includes("all")}
                                checked={true}
                                onChange={handleOnChangeA}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng x"
                            control={
                              <Checkbox
                                value="x"
                                checked={SelectedA.includes("x")}
                                onChange={handleOnChangeA}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng y"
                            control={
                              <Checkbox
                                value="y"
                                // checked={SelectedA.includes("y")}
                                checked={true}
                                onChange={handleOnChangeA}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng z"
                            control={
                              <Checkbox
                                value="z"
                                checked={SelectedA.includes("z")}
                                onChange={handleOnChangeA}
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
                <h3>Nhóm chức năng B</h3>
                <div className="checkbox_group">
                  <Box>
                    <FormControl>
                      <FormGroup>
                        <div>
                          <FormControlLabel
                            label="Tất cả"
                            control={
                              <Checkbox
                                value="all"
                                checked={SelectedB.includes("all")}
                                onChange={handleOnChangeB}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng x"
                            control={
                              <Checkbox
                                value="x"
                                checked={SelectedB.includes("x")}
                                onChange={handleOnChangeB}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng y"
                            control={
                              <Checkbox
                                value="y"
                                checked={SelectedB.includes("y")}
                                onChange={handleOnChangeB}
                                style={{
                                  color: "#4277FF",
                                }}
                              />
                            }
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            label="Chức năng z"
                            control={
                              <Checkbox
                                value="z"
                                checked={SelectedB.includes("z")}
                                onChange={handleOnChangeB}
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
              </div>
            </div>
          </div>
        </div>
        <div className="addform_button">
          <Link to="/manage-role">
            <button className="addform_cancelbtn">Hủy bỏ</button>
          </Link>
          <button className="addform_addbtn" type="submit">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRole;
