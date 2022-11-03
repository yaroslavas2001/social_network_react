import style from "./FormsControls.module.css"

const Formcontrol = (props) => {
    const {  meta, children } = props
    // деструктурезация {input,meta,...props}
    // мы берем отдельно input,meta, а все оставшиеся штуки оставляем в пропсах
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? style.error : ""}>
            {children}
            {hasError && <span className={style.error_text}>{meta.error}</span>}
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