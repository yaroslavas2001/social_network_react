import style from './header.module.css'
import imageLogo from "./../../assets/blue-flower.png"
import React, { FC, useState } from "react"
import iconModileMenu from "./../../assets/mobile-menu.png"
import HeaderButton from './HeaderButton';
import MobileMenu from '../../common/MobileMenu/MobileMenu';
import Sidebar from '../Sidebar/sidebar';
import { join } from '../../utils/function';
type propstype = {
  login: string
  isAuth: boolean
  logoutMe: () => void
}
const Header: FC<propstype> = ({ isAuth, login, logoutMe }) => {
  // мобильно меню
  let [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

  const showMobileMenu = () => {
    setIsShowMobileMenu(true)
  }
  const logOutMe = () => {
    logoutMe()
    setIsShowMobileMenu(false)
  }
  const loginMe = () => {
    setIsShowMobileMenu(false)
  }
  const changePage = () => {
    setIsShowMobileMenu(false)
  }
  return (
    <header className={style.header}>
      <div className={style.header_block}>
        <div className={style.row}>
          <img className={style.header_logo} src={imageLogo} alt="logo" />
          <div className={style.header_text}>Social network</div>
        </div>

        <div className={join([style.row, style.desctop_btn])}>
          <HeaderButton login={login} isAuth={isAuth} logoutMe={logOutMe} />
        </div>
        <div className={style.mobile_mune}>
          <button onClick={showMobileMenu} className={style.mobile_menu_btn}>
            <img src={iconModileMenu} alt="mobile menu" />
          </button>

          <MobileMenu isShow={isShowMobileMenu}>
            <div>
              <HeaderButton login={login} isAuth={isAuth} logoutMe={logOutMe} loginMe={loginMe} />
              <Sidebar changePage={changePage} />
            </div>
          </MobileMenu>


        </div>
      </div>
    </header>
  );
}

export default Header;
