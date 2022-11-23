import { Field, reduxForm } from "redux-form"
import {  Input } from "../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../utils/validator/validators"
import React, { FC } from "react"

const maxLenght50 = maxLenghtCreator(50)
const maxLenght10 = maxLenghtCreator(10)

type CaptchaFormPropsType = {
    capchaUrl: string
    handleSubmit: () => void
}
type CaptchaFormFieldType = {
    captcha: string
}
const CaptchaForm: FC<CaptchaFormPropsType> = ({ handleSubmit, capchaUrl }) => {
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

const ReduxCaptchaForm = reduxForm<CaptchaFormFieldType, CaptchaFormPropsType>({
    form: 'CaptchaForm'
})(CaptchaForm)

export default ReduxCaptchaForm