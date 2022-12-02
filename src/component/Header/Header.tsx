import style from './header.module.css'
import imageLogo from "./../../style/blue-flower.png"
import { NavLink } from 'react-router-dom';
import React, { FC } from "react"
import BaseButton from '../../common/Button/BaseButton';
type propstype = {
  login: string
  isAuth: boolean
  logoutMe: () => void
}
const Header: FC<propstype> = ({ isAuth, login, logoutMe }) => {
  return (
    <header className={style.header}>
      <div className={style.header_block}>
        <div className={style.row}>
          <img className={style.header_logo} src={imageLogo} alt="logo" />
          <div className={style.header_text}>Social network</div>
        </div>
        <div className={style.row}>
          {isAuth ? <>
            <div className={style.header_login}>{login}</div>
            <BaseButton value="Log out" onClick={logoutMe} />
          </> : ''}
          {!isAuth ? <NavLink to='/login'>
            <BaseButton value="Log in" onClick={() => { }} />
          </NavLink> : ''}
        </div>

      </div>

    </header>
  );
}

export default Header;
