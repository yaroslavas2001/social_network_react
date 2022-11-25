import { Navigate } from "react-router-dom"
import React from "react"
import ReduxLoginForm from "./LoginForm"
import style from "./../../../App.module.css"

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        const captha = formData.captha ? formData.captha : ""
        props.logintMe(formData.email, formData.password,
            formData.rememberMe, captha
        )
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return (<div className={style.content}>
        <h1>Login</h1>
        <ReduxLoginForm {...props} onSubmit={onSubmit} />

    </div>)
}
export default Login