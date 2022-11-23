import { reduxForm } from "redux-form"
import { createField, Input } from "../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
import style from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC } from "react"

const maxLenght50 = maxLenghtCreator(50)
type LoginFormPropsType = {
    isShowCapcha: boolean
    error: any
    handleSubmit: () => void
}
type LoginFormFieldType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: FC<LoginFormPropsType> = ({ handleSubmit, error, isShowCapcha }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", 'email', [required, maxLenght50], Input)}
            {/* <Field name={'email'} component={Input}
                    placeholder="Login"
                    validate={[required, maxLenght50]}
                /> */}
            {createField("Password", 'password', [required, maxLenght50],
                Input, { type: "password" })}

            {createField(null, 'rememberMe', [],
                'input', { type: "checkbox" }, "Remember me")}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button disabled={isShowCapcha}>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormFieldType, LoginFormPropsType>({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm