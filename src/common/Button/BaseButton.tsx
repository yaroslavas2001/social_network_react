import style from "./BaseButton.module.css"
import React, { FC } from "react"
import { join } from "../../utils/function"
export type BaseButtonType = {
    value: string
    className?: Array<string>
    isDisabled?: boolean
    isSmall?: boolean
    isMutedStyle?: boolean
    type?:any
    onClick?: () => void
}
let BaseButton: FC<BaseButtonType> = ({ isDisabled, type,className, isSmall, isMutedStyle =false, value = "text", onClick }) => {

    const porpsClassName = join(className)
    const BtnStyle = isMutedStyle ? style.muted:style.colorful  
    const listClassName = join([porpsClassName ? porpsClassName : '', BtnStyle, style.btn,
    isSmall ? style.btn_small : ''])

    return (<button disabled={isDisabled} type={type}
        
        className={listClassName} onClick={() => onClick()} >
        {value}
    </button>)
}
export default BaseButton