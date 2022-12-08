import style from './header.module.css'
import { NavLink } from 'react-router-dom';
import React, { FC } from "react"
import BaseButton from '../../common/Button/BaseButton';
type HeaderButtonType = {
  login: string
  isAuth: boolean
  logoutMe: () => void
  loginMe?:()=>void
}
const HeaderButton: FC<HeaderButtonType> = ({ isAuth, login,loginMe, logoutMe }) => {
  return (
    <div className={style.row}>
      {isAuth ? <>
        <div className={style.header_login}>{login}</div>
        <BaseButton isMutedStyle={true} value="Log out" isSmall onClick={logoutMe} />
      </> : ''}
      {!isAuth ? <NavLink to='/login'>
        <BaseButton isSmall value="Log in" onClick={loginMe} />
      </NavLink> : ''}
    </div>
  );
}

export default HeaderButton;
