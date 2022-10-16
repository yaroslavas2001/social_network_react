import axios from "axios"
import s from "./Users.module.css"
const Users = (props) => {
  console.log("users", props.users)
  // if()
 
  if (props.users.length == 0)  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    props.setUsers(response.data.items)
    // console.log("data", data)
  })
  return (<div className="test">
    {
      props.users.map(el => <div key={el.id}>
        <div>{el.name}</div>
        <img className={s.photo} src={el.photos.large?el.photos.large:"https://www.w3schools.com/howto/img_avatar2.png"} alt="" />
        {el.followed ?
          <button className={[s.btn, s.unfollow].join(' ')} onClick={() => { props.unFollow(el.id) }}>UnFollow</button> :
          <button className={[s.btn, s.follow].join(' ')} onClick={() => { props.follow(el.id) }}>Follow</button>}
      </div>)
    }
  </div>);
}

export default Users;
