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
const User: FC<propsType> = ({ user, unFollow,follow ,followingInProgress,...props }) => {
  const photo = user.photos.large ? user.photos.large : imgDefault
  const unfollow = (id: number) => {
    return () => { unFollow(id) }
  }
  return (<div key={user.id}>
    <div>{user.name}</div>
    <NavLink to={`/profile/` + user.id}>
      <img className={style.photo} src={photo} alt="photo_user" />
    </NavLink>
    {user.followed ?
      <button disabled={followingInProgress.some((id: number) => id === user.id)}
        className={[style.btn, style.unfollow].join(' ')} onClick={
          unfollow(user.id)
        }>
        UnFollow
      </button> :
      <button disabled={followingInProgress.some((id: number) => id === user.id)}
        className={[style.btn, style.follow].join(' ')} onClick={() => {
          follow(user.id)
        }}>
        Follow
      </button>}
  </div>)

}

export default User;
