import { Field } from "redux-form"
import style from "./FormsControls.module.css"

const Formcontrol = (props) => {
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

export const Textarea = (props) => {
    return (<Formcontrol {...props} >
        <textarea {...props.input} {...props} />
    </Formcontrol>)
}

export const Input = (props) => {
    return (<Formcontrol {...props} >
        <input {...props.input} {...props} />
    </Formcontrol>)
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field name={name} component={component}
            placeholder={placeholder}
            validate={validators}
            {...props}
        />
        {text}
    </div>
}