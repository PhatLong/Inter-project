import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ResetPass from "./pages/ResetPass";
import ResetPass2 from "./pages/ResetPass2";
import Device from "./pages/Device";
import Profile from "./pages/Profile";
import Dashbroad from "./pages/Dashbroad";
import Dashbroad_weeks from "./pages/Dashbroad_weeks";
import Dashbroad_months from "./pages/Dashbroad_months";
import AddDevice from "./pages/AddDevice";
import UpdateDevice from "./pages/UpdateDevice";
import Device_Detail from "./pages/Device_Detail";
import Service from "./pages/Service";
import AddService from "./pages/AddService";
import UpdateService from "./pages/UpdateService";
import Service_Detail from "./pages/Service_Detail";
import Queue from "./pages/Queue";
import AddQueue from "./pages/AddQueue";
import Report from "./pages/Report";
import Queue_Detail from "./pages/Queue_Detail";
import ManageAccount from "./pages/ManageAccount";
import ManageRole from "./pages/ManageRole";
import UserLog from "./pages/UserLog";
import AddRole from "./pages/AddRole";
import UpdateRole from "./pages/UpdateRole";
import AddAccount from "./pages/AddAccount";
import UpdateAccount from "./pages/UpdateAccount";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/resetpass-2" element={<ResetPass2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashbroad" element={<Dashbroad />} />
        <Route path="/dashbroad-week" element={<Dashbroad_weeks />} />
        <Route path="/dashbroad-month" element={<Dashbroad_months />} />
        <Route path="/device" element={<Device />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/update-device" element={<UpdateDevice />} />
        <Route path="/device-detail" element={<Device_Detail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/update-service" element={<UpdateService />} />
        <Route path="/service-detail" element={<Service_Detail />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/add-queue" element={<AddQueue />} />
        <Route path="/queue-detail" element={<Queue_Detail />} />
        <Route path="/report" element={<Report />} />
        <Route path="/manage-role" element={<ManageRole />} />
        <Route path="/add-role" element={<AddRole />} />
        <Route path="/update-role" element={<UpdateRole />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/update-account" element={<UpdateAccount />} />
        <Route path="/user-log" element={<UserLog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
