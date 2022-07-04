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

const AddRole = () => {
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
        CurrentTitle="Thêm vai trò"
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
                <input type="text" placeholder="Nhập tên vai trò" />
              </div>
              <div className="role_description">
                <label>Mô tả:</label>
                <textarea placeholder="Nhập mô tả" />
              </div>
              <p className="role-notice">
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
                                checked={SelectedA.includes("all")}
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
                                checked={SelectedA.includes("y")}
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
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRole;
