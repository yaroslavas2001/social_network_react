import Users from "./Users"
import { connect } from "react-redux"
import {
  follow, setCurrentPage, setUsers,
  unFollow, setIsFollowingProgress,
  getUsersThunkCreator
} from "../../../redux/users-reducer"
import React from "react"
import Preloader from "../../../common/Preloader/Preloader"
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/users-selectors"
// import UsersApiComponent from "./UsersApiComponent"
class UsersContainer extends React.Component {
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
  onPageCanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
export default connect(mapStateToProps,
  {
    follow, unFollow,
    setCurrentPage, setIsFollowingProgress,
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

