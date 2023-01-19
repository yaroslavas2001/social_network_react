
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.css"
import profile from "./../../assets/Sidebar/profile.png"
import dialog from "./../../assets/Sidebar/dialog.png"
import users from "./../../assets/Sidebar/users.png"
import React, { FC } from "react"
type propsType = {
  changePage?: () => void
}
const Sidebar: FC<propsType> = ({ changePage }) => {
  const sidebar = [
    { path: "/profile", name: "Profile", icon: profile },
    // { path: "/dialog", name: "Dialog", icon: dialog },
    { path: "/users", name: "Users", icon: users },
    { path: "/test", name: "Test", icon: '' },
    // { path: "/settings", name: "Settings", icon: setting },
  ]
  const activeStyle = () => {
    return (navData: any) => navData.isActive ? style.active : style.item
  }
  let element = sidebar.map((el) =>
    <NavLink key={el.name} to={el.path} className={activeStyle()} onClick={changePage}>
      <img src={el.icon} alt="icon" className={style.icon} />
      <span>{el.name}</span>
    </NavLink>)

  return (<nav className={style.nav}>
    {/* className={`${s.link} ${s.active}`} */}
    {element}
  </nav>);
}

export default Sidebar;
