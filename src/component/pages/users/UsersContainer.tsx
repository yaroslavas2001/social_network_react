import { connect } from "react-redux"
import {
  follow,
  unFollow,
  getUsersThunkCreator,
  PaginationType, setCurrentPortion,setSearch
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
  isDarkTheme: boolean
  search:string
}
type MapDispatchToPropsType = {
  unFollow: (id: number) => void
  follow: (id: number) => void
  getUsers: (pageNumber: number, pageSize: number, term: string) => void
  setCurrentPortion: (portion: number) => void
  setSearch:(search:string)=>void
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
        isDarkTheme={this.props.isDarkTheme}
        search={this.props.search}
        setSearch={this.props.setSearch}
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
    isAuth: state.auth.isAuth,
    isDarkTheme: state.app.isDarkTheme,
    search:state.userPage.search
  }
}
//connect - state , dispatch , own , statef
export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps,
  {
    follow, unFollow,
    getUsers: getUsersThunkCreator,
    setCurrentPortion,setSearch

  }
)(UsersContainer)
