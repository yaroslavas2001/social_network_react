import style from "./DialogWindow.module.css"
import styleMain from "./../../App.module.css"
import React, { FC } from "react"
import BaseButton from "../Button/BaseButton"
import { join } from "../../utils/function"
import ModalWindow from "../ModalWindow/ModalWindow"
export type DialogWindowType = {
    text: string
    agreementTextButton?: string
    canselTextButton?: string
    id?: number
    isShow?:boolean
    agreement: (id: number) => void
    cansel: () => void
}
let DialogWindow: FC<DialogWindowType> = ({ text, agreementTextButton = "Ok",isShow,
    canselTextButton = "Сancel", id, agreement, cansel }) => {
    return (
        <ModalWindow isShow={isShow}>
            <div className={style.modal_window}>
                <div className={join([style.modal_window_block, styleMain.content])}>
                    <div className={style.modal_window_text}>{text}</div>
                    <div className={style.btn_block}>
                        <BaseButton className={[style.btn_indent]} value={agreementTextButton} onClick={() => agreement(id)} />
                        <BaseButton value={canselTextButton} onClick={cansel} />
                    </div>
                </div>
            </div>
        </ModalWindow>
    )
}
export default DialogWindow