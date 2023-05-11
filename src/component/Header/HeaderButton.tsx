import style from './header.module.css'
import { NavLink } from 'react-router-dom';
import React, { FC, useState } from "react"
import BaseButton from '../../common/Button/BaseButton';
import Toggle from '../../common/Toggle/Toggle';
type HeaderButtonType = {
  login: string
  isAuth: boolean
  isDarkTheme: boolean
  logoutMe: () => void
  loginMe?: () => void
  changeTheme: (theme: boolean) => void
}
const HeaderButton: FC<HeaderButtonType> = ({ isAuth, login, loginMe, logoutMe, isDarkTheme, changeTheme }) => {
  const [checked, setChecked] = useState(isDarkTheme);
  let check = () => {
    setChecked(!checked)
    changeTheme(!checked)
  }
  return (
    <div className={style.row}>
      <Toggle checked={checked} check={check} />
      {isAuth ? <>
        <div className={!isDarkTheme? style.header_login:style.header_login_dark}>{login}</div>
        <BaseButton isMutedStyle={true} value="Log out" isSmall onClick={logoutMe} />
      </> : ''}
      {!isAuth ? <NavLink to='/login'>
        <BaseButton isSmall value="Log in" onClick={loginMe} />
      </NavLink> : ''}
    </div>
  );
}

export default HeaderButton;
