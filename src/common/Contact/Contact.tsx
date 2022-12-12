import style from "./Contact.module.css"
import React, { FC } from "react"
export type ContactType = {
    link: string
    linkName: string
}
let Contact: FC<ContactType> = ({ link, linkName }) => {
    return (<>
        {link ?
            <div className={style.contact}>
                <a href={link}
                    rel="noreferrer" target="_blank"
                    title={link} className={style.link}>
                    {linkName}</a>
            </div>
            : null}
    </>)
}
export default Contact