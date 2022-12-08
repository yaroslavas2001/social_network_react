import style from "./MobileMenu.module.css"
import React, { FC, useEffect } from "react"
export type MobileMenuType = {
    children: JSX.Element
    isShow: boolean
}
let MobileMenu: FC<MobileMenuType> = ({ children, isShow }) => {

    useEffect(() => {
        // выполняется после отрисовки
        if (isShow) {
            document.body.style.setProperty('overflow', 'hidden');
        } else {
            document.body.style.setProperty('overflow', 'visible');
        }
    }, [isShow])
    return (<div className={isShow ? style.modal_window : style.not_show}>
        {children}
    </div>)
}
export default MobileMenu