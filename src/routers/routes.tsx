import App from "../App";
import { Route, Routes } from "react-router-dom";
import ForgetPass from "../pages/Auth/ForgetPassword/ForgetPass";
import ResetPass from "../pages/Auth/ResetPassword/ResetPass";
import Device from "../pages/Device Page/Device";
import Profile from "../pages/Auth/Profile/Profile";
import Dashbroad from "../pages/Dashbroad Page/Dashbroad";
import Dashbroad_weeks from "../pages/Dashbroad Page/Dashbroad_weeks";
import Dashbroad_months from "../pages/Dashbroad Page/Dashbroad_months";
import AddDevice from "../pages/Device Page/AddDevice";
import UpdateDevice from "../pages/Device Page/UpdateDevice";
import Device_Detail from "../pages/Device Page/Device_Detail";
import Service from "../pages/Service Page/Service";
import AddService from "../pages/Service Page/AddService";
import UpdateService from "../pages/Service Page/UpdateService";
import Service_Detail from "../pages/Service Page/Service_Detail";
import Queue from "../pages/Queue Page/Queue";
import AddQueue from "../pages/Queue Page/AddQueue";
import Report from "../pages/Report Page/Report";
import Queue_Detail from "../pages/Queue Page/Queue_Detail";
import ManageAccount from "../pages/Manage System Page/Account/ManageAccount";
import ManageRole from "../pages/Manage System Page/Role/ManageRole";
import UserLog from "../pages/Manage System Page/UserLog/UserLog";
import AddRole from "../pages/Manage System Page/Role/AddRole";
import UpdateRole from "../pages/Manage System Page/Role/UpdateRole";
import AddAccount from "../pages/Manage System Page/Account/AddAccount";
import UpdateAccount from "../pages/Manage System Page/Account/UpdateAccount";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/resetpass" element={<ResetPass />} />
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
  );
};

export default routes;
