import { FC } from "react"
import { UsersType } from "../../../types/types";
import User from "./user/User";
import React from "react"

type propsType = {
  isAuth: boolean
  users: Array<UsersType>
  followingInProgress: Array<number>
  isDarkTheme: boolean
  follow: (id: number) => void
  unFollow: (id: number) => void
}
const UsersBlock: FC<propsType> = ({ isDarkTheme, isAuth, followingInProgress, users, follow, unFollow }) => {
  return (
    <>
      {
        users.map(user =>
          <User user={user}
            unFollow={unFollow}
            follow={follow}
            followingInProgress={followingInProgress}
            key={user.id}
            isAuth={isAuth}
            isDarkTheme={isDarkTheme}
          />
        )
      }
    </>
  );
}
export default UsersBlock;
