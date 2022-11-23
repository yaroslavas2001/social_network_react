import style from "./Contact.module.css"
import React, { FC } from "react"
type propsType = {
    link: string
    linkName: string
}
let Contact: FC<propsType> = ({ link, linkName }) => {
    return (<div className={style.contact}>
        {link ?
            <a href={link}
                rel="noreferrer" target="_blank"
                title={link} className={style.link}>
                {linkName}</a>
            : null}
    </div>)
}
export default Contact