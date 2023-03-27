import { reduxForm } from "redux-form"
import { createField, Input } from "../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
import styleFormsControl from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC, useEffect, useState } from "react"
import Preloader from "../../../common/Preloader/Preloader"
import BaseButton from "../../../common/Button/BaseButton"
import style from "./Login.module.css"
import { Form } from "formik"
import { Formik } from "formik"

const maxLenght50 = maxLenghtCreator(50)
type LoginFormPropsType = {
    isShowCapcha: boolean
    isWaitingCapcha: boolean
    errorLogin: string
    capchaUrl: string
    handleSubmit: () => void
}
export type LoginFormFieldType = {
    email: string
    password: string
    rememberMe: boolean
    captha?: string
}
type LoginFormFieldTypeKeys = Extract<keyof LoginFormFieldType, string>
const LoginForm: FC<LoginFormPropsType> = ({ handleSubmit, errorLogin, capchaUrl, isShowCapcha, isWaitingCapcha }) => {
    // let isSubmit= isShowCapcha || capchaUrl.length > 0 ? 
    let [error, setError] = useState(errorLogin)
    useEffect((()=>{
        if(error!==errorLogin){
            console.log("error",error)
            setError(errorLogin)}
    }),[errorLogin])
    return (
        <Formik initialValues={{ password: "", email: "", rememberMe: false, captha: '' }} onSubmit={() => { handleSubmit() }}             >
            <Form>
                {createField<LoginFormFieldTypeKeys>("Login", 'email', [required, maxLenght50], Input)}
                {createField<LoginFormFieldTypeKeys>("Password", 'password', [required, maxLenght50],
                    Input, { type: "password" })}

                {createField<LoginFormFieldTypeKeys>(null, 'rememberMe', [],
                    'input', { type: "checkbox" }, "Remember me")}
               

                {isShowCapcha || capchaUrl.length > 0 ?
                    <>
                        Капча
                        <Preloader isFetching={isWaitingCapcha} />
                        <img src={capchaUrl} alt="capchaUrl" />
                        {createField<LoginFormFieldTypeKeys>("captha", 'captha', [required, maxLenght50],
                            Input, { type: "text" })}
                        {/* Введите почту, пароль и капчу */}
                    </> : null}
                {error && <div className={styleFormsControl.formSummaryError}>
                    {error}
                </div>}
                <BaseButton
                    type="submit" value="Login" onClick={() => { }} />
            </Form>
        </Formik>
    )
}

const ReduxLoginForm = reduxForm<LoginFormFieldType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm