import { reduxForm } from "redux-form"
import { createField, Input } from "../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
import styleFormsControl from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC } from "react"
import Preloader from "../../../common/Preloader/Preloader"
import BaseButton from "../../../common/Button/BaseButton"
import style from "./Login.module.css"
import { Form } from "formik"
import { Formik } from "formik/dist/Formik"

const maxLenght50 = maxLenghtCreator(50)
type LoginFormPropsType = {
    isShowCapcha: boolean
    isWaitingCapcha: boolean
    _error: any
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
const LoginForm: FC<LoginFormPropsType> = ({ handleSubmit, _error, capchaUrl, isShowCapcha, isWaitingCapcha }) => {
    return (
        <form onSubmit={handleSubmit} >
            {/* <Formik initialValues={{ password: "", email: "", rememberMe: false, captha: '' }} onSubmit={handleSubmit} >
                <Form> */}
                    {createField<LoginFormFieldTypeKeys>("Login", 'email', [required, maxLenght50], Input)}
                    {/* <Field name={'email'} component={Input}
                    placeholder="Login"
                    validate={[required, maxLenght50]}
                /> */}
                    {createField<LoginFormFieldTypeKeys>("Password", 'password', [required, maxLenght50],
                        Input, { type: "password" })}

                    {createField<LoginFormFieldTypeKeys>(null, 'rememberMe', [],
                        'input', { type: "checkbox" }, "Remember me")}
                    {_error && <div className={styleFormsControl.formSummaryError}>
                        {_error}
                    </div>}

                    {isShowCapcha ?
                        <>
                            Капча
                            <Preloader isFetching={isWaitingCapcha} />
                            <img src={capchaUrl} alt="capchaUrl" />
                            {createField<LoginFormFieldTypeKeys>("captha", 'captha', [required, maxLenght50],
                                Input, { type: "text" })}
                        </> : null}
                {/* </Form>
            </Formik> */}

            <BaseButton value="Login" onClick={() => { }} />
            {/* <button >Login</button> */}
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormFieldType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm