import { NavLink } from "react-router-dom"
import style from "./Users.module.css"
import imgDefault from "./../../../style/avatar.png"
const User = ({ user, ...props }) => {
  const photo = user.photos.large ? user.photos.large : imgDefault
  return (<div key={user.id}>
    <div>{user.name}</div>
    <NavLink to={`/profile/` + user.id}>
      <img className={style.photo} src={photo} alt="photo_user" />
    </NavLink>
    {user.followed ?
      <button disabled={props.followingInProgress.some(id => id === user.id)}
        className={[style.btn, style.unfollow].join(' ')} onClick={() => {
          props.unFollow(user.id)
        }}>
        UnFollow
      </button> :
      <button disabled={props.followingInProgress.some(id => id === user.id)}
        className={[style.btn, style.follow].join(' ')} onClick={() => {
          props.follow(user.id)
        }}>
        Follow
      </button>}
  </div>)

}

export default User;
