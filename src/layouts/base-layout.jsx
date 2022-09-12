import Headers from "../component/header"
import Sidebar from "../component/sidebar";
import Info from "../pages/profile";
import s from "./base-layout.module.css"
const BaseLayout = () => {
  return (
    <div className={s.app}>
      <Headers />
      <div className={s.main_row}>
        <Sidebar />
        <Info />
      </div>
    </div>
  );
}

export default BaseLayout;
