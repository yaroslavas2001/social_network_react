import { FC } from "react"
import Paginator from "../../../common/Paginator/Paginator";
import { UsersType } from "../../../types/types";
import User from "./user/User";
import React from "react"
import style from "./../../../App.module.css"
import { PaginationType } from "../../../redux/users-reducer";

type propsType = {
  pagination: PaginationType

  users: Array<UsersType>
  followingInProgress: Array<number>
  follow: (id: number) => void
  unFollow: (id: number) => void
  onPageCanged: (page: number) => void
  setCurrentPortion: (portion: number) => void

}
const Users: FC<propsType> = ({ followingInProgress, users, follow,setCurrentPortion, unFollow, onPageCanged,...props }) => {
  return (
    <div className={style.content}>
      <Paginator currentPage={props.pagination.currentPage}
        totalItemsCount={props.pagination.totalUsersCount}
        pageSize={props.pagination.pageSize}
        currentPortion={props.pagination.currentPortion}
        onPageCanged={onPageCanged}
        setCurrentPortion={setCurrentPortion}
        portionSize={300}
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
    </div>);
}

export default Users;
