import style from "./ProfilePhoto.module.css"
import photo from "./../../style/avatar.png"
import React, { FC } from "react"
type propsType = {
    photo: string
    lookingForAJob: boolean
}
const ProfilePhoto: FC<propsType> = (props: propsType) => {
    let userPhoto = props.photo ? props.photo : photo
    return (
        <div className={style.photo_block} >
            <img src={userPhoto} alt="profile_photo" className={style.photo} />
            {props.lookingForAJob ? <div className={style.islookingForAJob}>Open to work</div> : null}
        </div>
    )
}
export default ProfilePhoto