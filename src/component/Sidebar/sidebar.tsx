
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.css"
import profile from "./../../assets/Sidebar/profile.png"
import dialog from "./../../assets/Sidebar/dialog.png"
import users from "./../../assets/Sidebar/users.png"
import React, { FC } from "react"
type propsType = {
  isDarkTheme: boolean
  changePage?: () => void
}
const Sidebar: FC<propsType> = ({ changePage, isDarkTheme }) => {
  const sidebar = [
    { path: "/profile", name: "Profile", icon: profile },
    // { path: "/dialog", name: "Dialog", icon: dialog },
    { path: "/users", name: "Users", icon: users },
    { path: "/test", name: "Test", icon: '' },
    // { path: "/settings", name: "Settings", icon: setting },
  ]
  // const ar = [1, 2, 3]
  // console.log("reduce", ar.reduce((totla, number) => {
  //   // console.log("total", totla, number)
  //   return totla + number
  // }))
  let addStyle = (style: string) => {
    return `item ${style}`
  }
  const activeStyle = () => (navData: any) => {
    return navData.isActive ?
      isDarkTheme ? style.activeDark : style.activeLight
      : isDarkTheme ? style.itemDark : style.itemLight
  }
  // let color = { Color: isDarkTheme ? '#333333' : '#dce1e6' }

  let element = sidebar.map((el) =>
    <NavLink key={el.name} to={el.path} className={activeStyle()} onClick={changePage}>
      <div className={style.block}>
        <img src={el.icon} alt="" className={style.icon} />
        <span className={style.text}>{el.name}</span>
      </div>

    </NavLink>)

  return (<nav className={style.nav} >
    {/* className={`${s.link} ${s.active}`} */}
    {element}
  </nav>);
}

export default Sidebar;
