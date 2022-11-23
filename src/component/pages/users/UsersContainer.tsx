import { connect } from "react-redux"
import {
  follow,
  unFollow,
  getUsersThunkCreator
} from "../../../redux/users-reducer"
import React from "react"
import Preloader from "../../../common/Preloader/Preloader"
import {
  getCurrentPage, getFollowingInProgress, getIsFetching,
  getPageSize, getTotalUsersCount, getUsers
} from "../../../redux/users-selectors"
import Users from "./Users"
import { UsersType } from "../../../types/types"
import { AppReducerType } from "../../../redux/redux-store"
type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UsersType>
  followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
  unFollow: (id: number) => void
  follow: (id: number) => void
  getUsers: (pageNumber: number, pageSize: number) => void
}
type OwnPropsType = {
  pageTitle: string

}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {
  /*  если наш конструктор только и делает что делегирует конструирование
     родительскому конструктору, то его писать не нужно
    constructor(props){
    super(props)
    }
    */
  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageCanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        <Preloader isFetching={this.props.isFetching} />
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageCanged={this.onPageCanged}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
//connect - state , dispatch , own , statef
export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps,
  {
    follow, unFollow,
    getUsers: getUsersThunkCreator
  }
)(UsersContainer)
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//   }
// }
//mapDispatchToProps - ссылки на вызовы
// let mapStateToProps = (state) => {
//   return {
//     users: state.userPage.users,
//     pageSize: state.userPage.pageSize,
//     totalUsersCount: state.userPage.totalUsersCount,
//     currentPage: state.userPage.currentPage,
//     isFetching: state.userPage.isFetching,
//     followingInProgress: state.userPage.followingInProgress
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

