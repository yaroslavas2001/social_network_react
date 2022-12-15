import style from "./ModalWindow.module.css"
import React, { FC, useEffect, useState } from "react"
export type ModalWindowType = {
    children: JSX.Element
    isShow: boolean
}
let ModalWindow: FC<ModalWindowType> = ({ children, isShow }) => {
    let [width, setWidth] = useState(window.innerWidth)
    let [height, setHeight] = useState(window.innerHeight)
    let [scrollY, setScrollY] = useState(window.scrollY)

    let resize = (e: any) => {
        setWidth(e.target.innerWidth)
        setHeight(e.target.innerHeight)
        document.body.style.setProperty('overflow', isShow ? 'hidden' : 'visible');
    }
    useEffect(() => {
        window.addEventListener('resize', (e: any) => { resize(e) });
        setScrollY(window.scrollY)
        document.body.style.setProperty('overflow', isShow ? 'hidden' : 'visible');
        return () => {
            document.body.style.setProperty('overflow', 'visible');
            window.removeEventListener('resize', (e: any) => { resize(e) });
        }
    }, [isShow, width])

    let styleBase = {
        width: width + 'px',
        height: height + 'px',
        paddingTop: scrollY + 'px'
    }
    return (<div style={styleBase} className={isShow ? style.modal_window : style.not_show}>
        {children}
    </div>)
}
export default ModalWindow