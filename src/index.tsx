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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
