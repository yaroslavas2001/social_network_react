import { NavLink } from "react-router-dom"
import style from "./Users.module.css"
import imgDefault from "./../../../style/avatar.png"
import React, { FC } from 'react';
import { UsersType } from "../../../types/types"
// import React from "react"
type propsType = {

  user: UsersType
  unFollow: (id: number) => void
  follow: (id: number) => void
  followingInProgress: Array<number>
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
    return followingInProgress.some((id: number) => id === user.id)
  }
  const join = (r: Array<string>) => {
    return r.join(" ")
  }
  return (
    <>
      <div>{user.name}</div>
      <NavLink to={`/profile/` + user.id}>
        <img className={style.photo} src={photo} alt="photo_user" />
      </NavLink>

      {user.followed ?
        <button disabled={disabled()}
          className={join([style.btn, style.unfollow])}
          onClick={unfollowUser(user.id)}>
          UnFollow
        </button> :
        <button disabled={disabled()}
          className={join([style.btn, style.follow])}
          onClick={followUser(user.id)}>
          Follow
        </button>
      }
    </>)

}

export default User;
