import style from "./BaseButton.module.css"
import React, { FC } from "react"
import { join } from "../../utils/function"
export type BaseButtonType = {
    value: string
    className?: Array<string>
    isDisabled?: boolean
    onClick?: () => void
}
let BaseButton: FC<BaseButtonType> = ({ isDisabled, className, value = "text", onClick }) => {

    const porpsClassName = join(className)
    const listClassName = join([porpsClassName ? porpsClassName : '', style.btn])

    return (<button disabled={isDisabled}
        className={listClassName} onClick={() => onClick()} >
        {value}
    </button>)
}
export default BaseButton