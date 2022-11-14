import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { createField, Input } from "../../../common/FormsControls/FormsControls"
import Preloader from "../../../common/Preloader/Preloader"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
import style from "./../../../common/FormsControls/FormsControls.module.css"
const maxLenght50 = maxLenghtCreator(50)
const maxLenght10 = maxLenghtCreator(10)

const LoginForm = ({ handleSubmit, error, isShowCapcha }) => {
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
                'input', { type: "checkbox" },"Remember me")}      
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button disabled={isShowCapcha}>Login</button>
            </div>
        </form>
    )
}
const CaptchaForm = ({ handleSubmit, capchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <img src={capchaUrl} alt="capchaUrl" />
            <div>
                <Field name={'captcha'} component={Input}
                    placeholder="captcha"
                    validate={[required, maxLenght10]}
                />
            </div>
            <button>Отправить капчу</button>
        </form>
    )
}
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)
const ReduxCaptchaForm = reduxForm({
    form: 'CaptchaForm'
})(CaptchaForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logintMe(formData.email, formData.password,
            formData.rememberMe, true
        )
    }
    const onSubmitCaptha = (formData) => {
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