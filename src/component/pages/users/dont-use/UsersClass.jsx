import axios from "axios"
import React from "react"
import style from "./../Users.module.css"
class UsersClass extends React.Component {
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
  onPageCanged = async (p) => {
    this.props.setCurrentPage(p)
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
    this.props.setUsers(response.data.items)
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)

    }
    return (<div className="test">
      <div>
        {pages.map(p => <span key={p} className={this.props.currentPage === p ? style.select : style.item} onClick={() => this.onPageCanged(p)}> {p}</span>)}
      </div>
      {
        this.props.users.map(el => <div key={el.id}>
          <div>{el.name}</div>
          <img className={style.photo} src={el.photos.large ? el.photos.large : "https://www.w3schools.com/howto/img_avatar2.png"} alt="" />
          {el.followed ?
            <button className={[style.btn, style.unfollow].join(' ')} onClick={() => { this.props.unFollow(el.id) }}>UnFollow</button> :
            <button className={[style.btn, style.follow].join(' ')} onClick={() => { this.props.follow(el.id) }}>Follow</button>}
        </div>)
      }
    </div>
    )
  }
}

export default UsersClass;
