import style from "./ProfilePhoto.module.css"
let ProfilePhoto = (props) => {
    return (<div className={style.photo} >
        <img src={props.photo} />
        {props.lookingForAJob ? <div className={style.islookingForAJob}>Open to work</div> : null}
    </div>)
}
export default ProfilePhoto