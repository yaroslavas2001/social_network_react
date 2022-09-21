import { Route, Routes } from "react-router-dom";
import Headers from "../component/Header/header"
import Sidebar from "../component/Sidebar/sidebar";
import Dialog from "../pages/dialog/Dialog";
import Profile from "../pages/profile/Profile";
import s from "./base-layout.module.css"
const BaseLayout = (props) => {
  return (
    <div className={s.app}>
      <Headers />
      <div className={s.main_row}>
        <Sidebar />
        <div className="content">
          <Routes>
            {/* <Route path="/" render={()=><Profile  posts={posts}  />} />  не работает, не та версия*/}
            <Route path="/" element={<Profile profilePage={props.state.profilePage} />} />
            <Route path="/profile"
              element={<Profile profilePage={props.state.profilePage} />} />
            <Route path="/dialog"
              element={<Dialog dialogsPage={props.state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
