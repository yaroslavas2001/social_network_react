import Users from "./Users"
import { connect } from "react-redux"
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer"
import UsersClass from "./UsersClass"

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
export default UsersContainer;