import { connect } from "react-redux"
import {
  follow,
  unFollow,
  getUsersThunkCreator,
  PaginationType, setCurrentPortion,
} from "../../../redux/users-reducer"
import React from "react"
import Preloader from "../../../common/Preloader/Preloader"
import {
  getFollowingInProgress, getIsFetching,
  getUsers, getUsersPagination
} from "../../../redux/users-selectors"
import Users from "./Users"
import { UsersType } from "../../../types/types"
import { AppReducerType } from "../../../redux/redux-store"
type MapStateToPropsType = {
  pagination: PaginationType
  isFetching: boolean
  users: Array<UsersType>
  followingInProgress: Array<number>
  isAuth: boolean
}
type MapDispatchToPropsType = {
  unFollow: (id: number) => void
  follow: (id: number) => void
  getUsers: (pageNumber: number, pageSize: number, term: string) => void
  setCurrentPortion: (portion: number) => void
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
    this.props.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize, '')
  }
  onPageCanged = (pageNumber: number, term: string) => {
    this.props.getUsers(pageNumber, this.props.pagination.pageSize, term)
  }
  render() {
    if (this.props.isFetching)
      return (<Preloader isFetching={this.props.isFetching} />)
    return (
      <Users pagination={this.props.pagination}
        users={this.props.users}
        onPageCanged={this.onPageCanged}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        setCurrentPortion={this.props.setCurrentPortion}
        followingInProgress={this.props.followingInProgress}
        isAuth={this.props.isAuth}
      />
    )
  }
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
  return {
    pagination: getUsersPagination(state),
    users: getUsers(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}
//connect - state , dispatch , own , statef
export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps,
  {
    follow, unFollow,
    getUsers: getUsersThunkCreator,
    setCurrentPortion
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

