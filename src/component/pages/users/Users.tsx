import { FC, useEffect, useState } from "react"
import Paginator from "../../../common/Paginator/Paginator";
import { UsersType } from "../../../types/types";
import User from "./user/User";
import React from "react"
import style from "./../../../App.module.css"
import { PaginationType } from "../../../redux/users-reducer";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";

type propsType = {
  pagination: PaginationType
  isAuth: boolean
  users: Array<UsersType>
  followingInProgress: Array<number>
  follow: (id: number) => void
  unFollow: (id: number) => void
  onPageCanged: (page: number, term: string) => void
  setCurrentPortion: (portion: number) => void

}
const Users: FC<propsType> = ({ followingInProgress, users, follow, setCurrentPortion, unFollow, onPageCanged, ...props }) => {
  let [search, setSearchText] = useState('')
  const onPageCanged2 = (page: number) => {
    onPageCanged(page, search)
  }
  useEffect(() => {
    // выполняется после отрисовки
    if (search.length > 0)
      onPageCanged(1, search)
    console.log("search", search)
  }, [search])
  return (
    <div className={style.content}>
      <Paginator currentPage={props.pagination.currentPage}
        totalItemsCount={props.pagination.totalUsersCount}
        pageSize={props.pagination.pageSize}
        currentPortion={props.pagination.currentPortion}
        onPageCanged={onPageCanged2}
        setCurrentPortion={setCurrentPortion}
        portionSize={10}
      />
      <UserSearchForm setSearchText={setSearchText}></UserSearchForm>
      {
        users.map(user =>
          <User user={user}
            unFollow={unFollow}
            follow={follow}
            followingInProgress={followingInProgress}
            key={user.id}
            isAuth={props.isAuth}
          />
        )
      }
    </div>);
}
const UserSearchForm = (props: any) => {
  const onSubmit = (values: any) => {
    props.setSearchText(values.term);
  }
  return (
    <Formik
      initialValues={{ term: '' }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="term" type="text" />
        <button type="submit">Find</button>
      </Form>
    </Formik>
  )
}
export default Users;
