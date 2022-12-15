import { FC } from "react"
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
  const onPageCanged2 = (page: number) => {
    onPageCanged(page, '')
  }
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
      {/* <UserSearchForm></UserSearchForm> */}
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
const UserSearchForm = () => {
  const onSubmit = () => {
    // async (values: any) => {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   alert(JSON.stringify(values, null, 2));
    // }
  }
  return (
    <Formik
      initialValues={{ term: "" }}
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
