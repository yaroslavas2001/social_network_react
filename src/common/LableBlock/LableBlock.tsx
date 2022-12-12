import style from "./LableBlock.module.css"
import React, { FC, useEffect } from "react"
export type LableBlockType = {
    children: JSX.Element | string
    name: string
    isBold?: boolean
    margin?: number
}
let LableBlock: FC<LableBlockType> = ({ children, name, margin = 0, isBold = false }) => {
    let styleBlock = {
        margin: margin + "px 0px"
    }
    return (<div className={style.label_block} style={styleBlock}>
        <label className={isBold ? style.label_bold : style.label}>{name}</label>
        <div className={style.block}>
            {children}
        </div>
    </div>)
}
export default LableBlock