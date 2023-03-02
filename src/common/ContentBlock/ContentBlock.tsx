import style from "./ContentBlock.module.css"
import React, { FC } from "react"
export type ContentBlockType = {
    children: Array<JSX.Element> | JSX.Element
    isDarkTheme: boolean
}
let ContentBlock: FC<ContentBlockType> = ({ children, isDarkTheme }) => {
    let styleFon = isDarkTheme ?
        { backgroundColor: "#424242", border: '1px solid rgba(255, 255, 255, 0.08)', color: "#fff", } :
        { backgroundColor: "#fff", border: '1px solid rgba(0, 0, 0, 0.16)' }

    return (<div style={styleFon} className={style.content}>
        {children}
    </div>)
}
export default ContentBlock