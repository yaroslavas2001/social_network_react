import style from "./TextareaAutosizeCustom.module.css"
import React, { FC } from "react"
import TextareaAutosize from "react-textarea-autosize";

let TextareaAutosizeCustom = (props: any) => {
    return (<TextareaAutosize className={style.textarea_auto_size} {...props} />)
}
export default TextareaAutosizeCustom