import Headers from "../component/header"
import Sidebar from "../component/sidebar";
import Info from "../pages/profile";
const BaseLayout = () => {
  return (
    <div className="app">
      <Headers />
      <div className="main-row">
        <Sidebar />
        <Info />
      </div>
    </div>
  );
}

export default BaseLayout;
