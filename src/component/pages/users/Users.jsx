import axios from "axios"
import { NavLink } from "react-router-dom"
import s from "./Users.module.css"
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)

  }
  return (<div className="test">
    <div>
      {pages.map(p => <span key={p} className={props.currentPage === p ? s.select : s.item} onClick={() => props.onPageCanged(p)}> {p}</span>)}
    </div>
    {
      props.users.map(el => <div key={el.id}>
        <div>{el.name}</div>
        <NavLink to={`/profile/` + el.id}>
          <img className={s.photo} src={el.photos.large ? el.photos.large : "https://www.w3schools.com/howto/img_avatar2.png"} alt="" />
        </NavLink>
        {el.followed ?
          <button className={[s.btn, s.unfollow].join(' ')} onClick={() => {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
              withCredentials: true, headers: {
                "API-KEY": "7741aeff-4475-4c99-8e86-0fb98b53e58f"
              }
            }).then(response => {
              if (response.data.resultCode === 0) {
                console.log("response", response.data)
                props.unFollow(el.id)
              }
            })

          }}>UnFollow</button> :
          <button className={[s.btn, s.follow].join(' ')} onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
              withCredentials: true, headers: {
                "API-KEY": "7741aeff-4475-4c99-8e86-0fb98b53e58f"
              }
            }).then(response => {
              if (response.data.resultCode === 0) {
                console.log("response", response.data)
                props.follow(el.id)
              }
            })
          }}>Follow</button>}
      </div>)
    }
  </div>);
}

export default Users;
