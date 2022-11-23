import style from './header.module.css'
import imageLogo from "./../../style/blue-flower.png"
import { NavLink } from 'react-router-dom';
import React, { FC } from "react"
type propstype = {
  login: string
  isAuth: boolean
  logoutMe: () => void
}
const Header: FC<propstype> = ({ isAuth, login, logoutMe }) => {
  return (
    <header className={style.header}>
      <img className={style.header_logo} src={imageLogo} alt="logo" />
      <div className={style.header_text}>Social network</div>
      {isAuth ? login : <NavLink to='/login'>Войти</NavLink>}
      {isAuth ? <button onClick={logoutMe}>Выйти</button> : ''}
    </header>
  );
}

export default Header;
