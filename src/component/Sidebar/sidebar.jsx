
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css"
const Sidebar = () => {
  const sidebar = [
    { path: "/profile", name: "Profile" },
    { path: "/dialog", name: "dialog" },
    { path: "/users", name: "users" },
    { path: "/news", name: "news" },
    { path: "/settings", name: "settings" },
  ]
  const activeStyle = () => {
    return navData => navData.isActive ? s.active : s.item
  }
  let element = sidebar.map((el) => <NavLink key={el.name} to={el.path} className={activeStyle()} >
    {el.name}</NavLink>)

  return (<nav className={s.nav}>
    {/* className={`${s.link} ${s.active}`} */}
    {/* <NavLink to="/profile" className={activeStyle()} >
      Profile</NavLink> */}
    {element}
  </nav>);
}

export default Sidebar;
