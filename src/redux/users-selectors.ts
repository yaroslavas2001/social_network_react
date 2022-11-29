import { createSelector } from "reselect"
import { AppReducerType } from "./redux-store"
const getUsersSelector = (state: AppReducerType) => {
  return state.userPage.users
}
// export const getUsers = createSelector(getUsersSelector, getIsFetching, (users, isFetching) => {
//   return users.filter(u => true)
// })
export const getUsers = createSelector(getUsersSelector, (users) => {
  // return users.filter(u => true)
  return users
})
// export const getPageSize = (state: AppReducerType) => {
//   return state.userPage.pagination.pageSize
// }
export const getTotalUsersCount = (state: AppReducerType) => {
  return state.userPage.pagination.totalUsersCount
}
export const getCurrentPage = (state: AppReducerType) => {
  return state.userPage.pagination.currentPage
}
export const getIsFetching = (state: AppReducerType) => {
  return state.userPage.isFetching
}
export const getFollowingInProgress = (state: AppReducerType) => {
  return state.userPage.followingInProgress
}
export const getUsersPagination = (state: AppReducerType) => {
  return state.userPage.pagination
}
// export const countSomethingDificult = (state) => {
//  for... math... big arrays
//   return  state.userPage.followingInProgress
// }