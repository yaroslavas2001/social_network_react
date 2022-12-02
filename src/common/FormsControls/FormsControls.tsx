import { Field } from "redux-form"
import style from "./FormsControls.module.css"
import React, { FC } from "react"
import { FielddValidatorType } from "../../utils/validator/validators"
type FormcontrolTYpe = {
    children: React.ReactNode
    meta: {
        touched: boolean
        error: string
    }
}
const Formcontrol: FC<FormcontrolTYpe> = (props) => {
    const { meta: { touched, error }, children } = props
    // деструктурезация {input,meta,...props}
    // мы берем отдельно input,meta, а все оставшиеся штуки оставляем в пропсах
    const hasError = touched && error
    return (
        <div className={hasError ? style.error : ""}>
            {children}
            {hasError && <span className={style.error_text}>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    return (<Formcontrol {...props} >
        <textarea {...props.input} {...props} />
    </Formcontrol>)
}

export const Input = (props: any) => {
    return (<Formcontrol {...props} >
        <input {...props.input} {...props} />
    </Formcontrol>)
}

export const createField = (placeholder: string, name: string,
    validators: Array<FielddValidatorType>,
    component: string | React.Component | React.FC,
    props = {}, text = "") => {
    return <div className={style.row}>
        <Field name={name} component={component}
            placeholder={placeholder}
            validate={validators}
            {...props}
        />
        {text}
    </div>
}