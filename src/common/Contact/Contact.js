import style from "./Contact.module.css"
let Contact = (props) => {
    return (<div className={style.contact}>
        {props.link ? <a href={props.link} target="_blank" title={props.link} className={style.link}>{props.linkName}</a> : null}
    </div>)
}
export default Contact