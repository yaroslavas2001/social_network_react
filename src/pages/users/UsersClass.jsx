import axios from "axios"
import React from "react"
import s from "./Users.module.css"
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
  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      })

  }
  render() {
    return (<div className="test">
      {/* <button onClick={this.getUsers}>Получить ользователей</button> */}
      {
        this.props.users.map(el => <div key={el.id}>
          <div>{el.name}</div>
          <img className={s.photo} src={el.photos.large ? el.photos.large : "https://www.w3schools.com/howto/img_avatar2.png"} alt="" />
          {el.followed ?
            <button className={[s.btn, s.unfollow].join(' ')} onClick={() => { this.props.unFollow(el.id) }}>UnFollow</button> :
            <button className={[s.btn, s.follow].join(' ')} onClick={() => { this.props.follow(el.id) }}>Follow</button>}
        </div>)
      }
    </div>
    )
  }
}

export default UsersClass;
