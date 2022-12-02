import { NavLink } from "react-router-dom"
import style from "./User.module.css"
import imgDefault from "./../../../../style/default_user.png"
import React, { FC } from 'react';
import { UsersType } from "../../../../types/types"
import BaseButton from "../../../../common/Button/BaseButton";
type propsType = {
  user: UsersType
  followingInProgress: Array<number>
  unFollow: (id: number) => void
  follow: (id: number) => void
}
const User: FC<propsType> = ({ user, unFollow, follow, followingInProgress, ...props }) => {
  const photo = user.photos.large ? user.photos.large : imgDefault
  const unfollowUser = (id: number) => {
    return () => { unFollow(id) }
  }
  const followUser = (id: number) => {
    return () => { follow(id) }
  }
  const disabled = () => {
    // Добавить обработку на не залогиневшихся полльзователей
    return followingInProgress.some((id: number) => id === user.id)
  }

  return (
    <div className={style.user}>
      <NavLink to={`/profile/` + user.id} className={style.img_block}>
        <img className={style.photo} src={photo} alt="photo_user" />
      </NavLink>
      <div className={style.user_block}>
        <div className={style.user_information}>
          <NavLink to={`/profile/` + user.id} className={style.user_name}>
            <div >{user.name}</div>
          </NavLink>
          <div className={style.user_status}>{user.status}</div>
        </div>
        <div className={style.btn_clock}>
          {user.followed ?
            // <button disabled={disabled()}
            //   className={join([style.btn, style.unfollow])}
            //   onClick={unfollowUser(user.id)}>
            //   UnFollow
            // </button> 
            <BaseButton isDisabled={disabled()} isMutedStyle={true} 
              value="UnFollow" onClick={unfollowUser(user.id)} />
            :
            // <button disabled={disabled()}
            //   className={join([style.btn, style.follow])}
            //   onClick={followUser(user.id)}>
            //   Follow
            // </button>
            <BaseButton isDisabled={disabled()}
              value="Follow" onClick={followUser(user.id)} />}
        </div>
      </div>
    </div>)
}

export default User;
