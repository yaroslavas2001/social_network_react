import style from "./ProfilePhoto.module.css"
import photo from "./../../style/avatar.png"
import React, { FC } from "react"
type propsType = {
    photo: string
    lookingForAJob: boolean
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
            {props.lookingForAJob ? <div className={style.islookingForAJob}>Open to work</div> : null}
        </div>
        <input type="file" onChange={test} />
        {/* <button>upDatePhoto</button> */}
    </>

    )
}
export default ProfilePhoto