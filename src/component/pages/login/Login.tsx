import { Navigate } from "react-router-dom"
import React from "react"
import ReduxLoginForm, { LoginFormFieldType } from "./LoginForm"
import ContentBlock from "../../../common/ContentBlock/ContentBlock"

const Login = (props: any) => {
    const onSubmit = (formData: LoginFormFieldType) => {
        const captha = formData.captha ? formData.captha : ""
        props.logintMe(formData.email, formData.password,
            formData.rememberMe, captha
        )
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return (
        <ContentBlock isDarkTheme={props.isDarkTheme}>
            <h1>Login</h1>
            <ReduxLoginForm {...props} onSubmit={onSubmit} />
        </ContentBlock>
        // <div className={style.content}>

        // </div>
    )
}
export default Login