import { NavLink } from "react-router-dom"
import style from "./Users.module.css"

const User = ({ user, ...props }) => {
  const imgDefaultUser = "https://www.w3schools.com/howto/img_avatar2.png"

  return (<div key={user.id}>
    <div>{user.name}</div>
    <NavLink to={`/profile/` + user.id}>
      <img className={style.photo} src={user.photos.large ? user.photos.large : imgDefaultUser} alt="" />
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
