import Users from "./Users"
import { connect } from "react-redux"
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unFollow } from "../../../redux/users-reducer"
import { usersAPI } from "../../../api/api"
import React from "react"
import Preloader from "../../../common/Preloader/Preloader"
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
    this.props.setIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      this.props.setUsers(response.items)
      this.props.setTotalUsersCount(response.totalCount)
      this.props.setIsFetching(false)
      console.log("users", response.items)
    })

  }
  onPageCanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
      this.props.setUsers(response.items)
      this.props.setIsFetching(false)
    })
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
        />
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching
  }
}
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
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default connect(mapStateToProps,
  {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching
  }
)(UsersContainer)
