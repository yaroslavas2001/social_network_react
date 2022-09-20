
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css"
const Sidebar = () => {
  const activeStyle = () => {
    return navData => navData.isActive ? s.active : s.item
  }
  return (<nav className={s.nav}>
    {/* className={`${s.link} ${s.active}`} */}
    <NavLink to="/profile" className={activeStyle()} >
      Profile</NavLink>
    <NavLink to="/dialog" className={activeStyle()}>Messages</NavLink>
    <NavLink to="/news" className={activeStyle()}>News</NavLink>
    <NavLink to="/music" className={activeStyle()}>Music</NavLink>
    <NavLink to="/settings" className={activeStyle()}>Settings</NavLink>
  </nav>);
}

export default Sidebar;
