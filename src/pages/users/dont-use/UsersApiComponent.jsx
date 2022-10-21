import axios from "axios"
import React from "react"
import Users from "../Users"
class UsersApiComponent extends React.Component {
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })

  }
  onPageCanged=(p)=>{
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {

    return <Users totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    users={this.props.users}
    onPageCanged={this.onPageCanged}
    unFollow={this.props.unFollow}
    follow={this.props.follow}

    />
  }
}

export default UsersApiComponent;
