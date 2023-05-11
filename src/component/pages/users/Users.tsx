import { FC } from "react"
import Paginator from "../../../common/Paginator/Paginator";
import { UsersType } from "../../../types/types";
import React from "react"
import { PaginationType } from "../../../redux/users-reducer";
import ContentBlock from "../../../common/ContentBlock/ContentBlock";
import UserSearchForm from "./user-form/UserSearchForm";
import UsersBlock from "./UsersBlock";
import style from "./Users.module.css"
type propsType = {
  pagination: PaginationType
  isAuth: boolean
  users: Array<UsersType>
  followingInProgress: Array<number>
  isDarkTheme: boolean
  search: string
  setSearch: (search: string) => void
  follow: (id: number) => void
  unFollow: (id: number) => void
  onPageCanged: (page: number, term: string) => void
  setCurrentPortion: (portion: number) => void
}
const Users: FC<propsType> = ({ search, isDarkTheme, followingInProgress, users, setSearch, follow, setCurrentPortion, unFollow, onPageCanged, ...props }) => {
  const pageChange = (page: number, search: string) => {
    onPageCanged(page, search)
    setSearch(search)
  }
  let userSearch = (searchText: string) => {
    pageChange(1, searchText)
  }

  return (
    <ContentBlock isDarkTheme={isDarkTheme}>

      <UserSearchForm setSearchText={userSearch} isDarkTheme={isDarkTheme} search={search} />

      <UsersBlock users={users}
        unFollow={unFollow}
        follow={follow}
        followingInProgress={followingInProgress}
        isAuth={props.isAuth}
        isDarkTheme={isDarkTheme} />
      <div className={style.pagination_wrapper}>
        <Paginator
          search={search}
          isDarkTheme={isDarkTheme}
          currentPage={props.pagination.currentPage}
          totalItemsCount={props.pagination.totalUsersCount}
          pageSize={props.pagination.pageSize}
          currentPortion={props.pagination.currentPortion}
          onPageCanged={pageChange}
          setCurrentPortion={setCurrentPortion}
          portionSize={10}
        />
      </div>

    </ContentBlock>
  );
}
export default Users;
