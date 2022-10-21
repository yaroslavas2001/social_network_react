import Users from "./Users"
import { connect } from "react-redux"
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unFollow } from "../../redux/users-reducer"
import React from "react"
import axios from "axios"
import Preloader from "../../common/Preloader/Preloader"
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      this.props.setIsFetching(false)
    })

  }
  onPageCanged = (p) => {
    this.props.setCurrentPage(p)
    this.props.setIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
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
