import style from "./ProfilePhoto.module.css"
import photo from "./../../assets/avatar.png"
import React, { FC } from "react"
import LoadPhoto from "./../../assets/load-photo.png"
type propsType = {
    photo: string
    lookingForAJob: boolean
    isAutorizedUserId: boolean
    setProfilePhoto: (photo: FormData) => void
}
const ProfilePhoto: FC<propsType> = (props: propsType) => {
    let userPhoto = props.photo ? props.photo : photo
    const test = (e: any) => {
        // условие что это активный пользователь
        let formData = new FormData()
        let file = e.target.files[0]
        formData.append("image", file, file.name)
        props.setProfilePhoto(formData)
    }
    return (<>
        <div className={style.photo_block} >
            <img src={userPhoto} alt="profile_photo" className={style.photo} />
            {props.isAutorizedUserId ?
                <label className={style.input_new_photo} title="Change a photo">
                    <img src={LoadPhoto} alt="Load Photo" />
                    <input type="file" onChange={test} />
                </label>
                : ''}
            {props.lookingForAJob ? <div className={style.islookingForAJob}>Open to work</div> : null}
        </div>
    </>

    )
}
export default ProfilePhoto