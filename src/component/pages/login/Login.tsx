import { Navigate } from "react-router-dom"
import Preloader from "../../../common/Preloader/Preloader"
import style from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC } from "react"
import ReduxLoginForm from "./LoginForm"
import ReduxCaptchaForm from "./CaptchaForm"

type propsType={
    
}
const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.logintMe(formData.email, formData.password,
            formData.rememberMe, true
        )
    }
    const onSubmitCaptha = (formData: any) => {
        if (formData.captcha.length > 4) props.finishСheckingCapcha()
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return (<div>
        <h1>Login</h1>
        <ReduxLoginForm {...props} onSubmit={onSubmit} />
        <div>
            {props.isShowCapcha ?

                <div>
                    Капча
                    <Preloader isFetching={props.isWaitingCapcha} />
                    {!props.isWaitingCapcha ?
                        <ReduxCaptchaForm {...props} onSubmit={onSubmitCaptha} />
                        : null}
                </div> : null}
        </div>
    </div>)
}
export default Login