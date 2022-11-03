import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { Input } from "../../../common/FormsControls/FormsControls"
import Preloader from "../../../common/Preloader/Preloader"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
const maxLenght50 = maxLenghtCreator(50)
const maxLenght10 = maxLenghtCreator(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input}
                    placeholder="Login"
                    validate={[required, maxLenght50]}
                />
            </div>
            <div>
                <Field name={'password'} component={Input}
                    placeholder="Password"
                    validate={[required, maxLenght50]}
                />
            </div>
            <div>
                <Field name={'rememberMe'} type="checkbox"
                    component={'input'} />
                Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const CaptchaForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <img src={props.capchaUrl} alt="capchaUrl" />
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
        if (formData.captcha.lenght > 4) props.finishСheckingCapcha()
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return (<div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
        <div>
            Капча
            {props.isShowCapcha ?
                <div>
                    <Preloader isFetching={props.isWaitingCapcha} />
                    {!props.isWaitingCapcha ?
                        <ReduxCaptchaForm {...props} onSubmit={onSubmitCaptha} />
                        : null}
                </div> : null}
        </div>
    </div>)
}
export default Login