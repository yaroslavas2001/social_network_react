import style from "./ModalWindow.module.css"
import styleMain from "./../../App.module.css"
import React, { FC } from "react"
import BaseButton from "../Button/BaseButton"
import { join } from "./../../utils/function"
export type ModalWindowType = {
    text: string
    agreementTextButton?: string
    canselTextButton?: string
    id?: number
    agreement: (id: number) => void
    cansel: () => void
}
let ModalWindow: FC<ModalWindowType> = ({ text, agreementTextButton = "Ok",
    canselTextButton = "Сancel", id, agreement, cansel }) => {
    return (<div className={style.modal_window}>
        <div className={join([style.modal_window_block, styleMain.content])}>
            <div className={style.modal_window_text}>{text}</div>
            <div className={style.btn_block}>
                <BaseButton className={[style.btn_indent]} value={agreementTextButton} onClick={() => agreement(id)} />
                <BaseButton value={canselTextButton} onClick={cansel} />
            </div>

        </div>
    </div>)
}
export default ModalWindow