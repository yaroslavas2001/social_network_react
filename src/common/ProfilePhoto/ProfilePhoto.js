import style from "./ProfilePhoto.module.css"
let ProfilePhoto = (props) => {
    return (<div className={style.photo} >
        {props.photo ?
            <div>
                <img src={props.photo} alt="profile_photo" />
                {props.lookingForAJob ? <div className={style.islookingForAJob}>Open to work</div> : null}
            </div> : null
        }

    </div>)
}
export default ProfilePhoto