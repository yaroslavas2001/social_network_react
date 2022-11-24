import { FC } from "react"
import Paginator from "../../../common/Paginator/Paginator";
import { UsersType } from "../../../types/types";
import User from "./user/User";
import React from "react"
import style from "./Users.module.css"

type propsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UsersType>
  followingInProgress: Array<number>
  follow: (id: number) => void
  unFollow: (id: number) => void
  onPageCanged: (page: number) => void
}
const Users: FC<propsType> = ({ totalUsersCount, pageSize, currentPage, followingInProgress, users, follow, unFollow, onPageCanged }) => {
  return (
    <>
      <Paginator currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageCanged={onPageCanged}
        portionSize={10}
      />
      {
        users.map(user =>
          <User user={user} 
          unFollow={unFollow} 
          follow={follow} 
          followingInProgress={followingInProgress} 
          key={user.id} 
          />
        )
      }
    </>);
}

export default Users;
