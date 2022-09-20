import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "../component/Header/header"
import Sidebar from "../component/Sidebar/sidebar";
import Dialog from "../pages/dialog/Dialog";
import Profile from "../pages/profile/Profile";
import s from "./base-layout.module.css"
const BaseLayout = () => {
  return (
    <div className={s.app}>
      <Headers />
      <div className={s.main_row}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialog" element={<Dialog />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
