
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.css"
import profile from "./../../style/Sidebar/profile.png"
import dialog from "./../../style/Sidebar/dialog.png"
import users from "./../../style/Sidebar/users.png"
import news from "./../../style/Sidebar/news.png"
import setting from "./../../style/Sidebar/setting.png"
import React from "react"
const Sidebar = () => {
  const sidebar = [
    { path: "/profile", name: "Profile", icon: profile },
    { path: "/dialog", name: "Dialog", icon: dialog },
    { path: "/users", name: "Users", icon: users },
    { path: "/news", name: "News", icon: news },
    { path: "/settings", name: "Settings", icon: setting },
  ]
  const activeStyle = () => {
    return (navData: any) => navData.isActive ? style.active : style.item
  }
  let element = sidebar.map((el) =>
    <NavLink key={el.name} to={el.path} className={activeStyle()} >
      <img src={el.icon} alt="icon" className={style.icon} />
      <span>{el.name}</span>
    </NavLink>)

  return (<nav className={style.nav}>
    {/* className={`${s.link} ${s.active}`} */}
    {element}
  </nav>);
}

export default Sidebar;