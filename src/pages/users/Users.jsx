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
      {pages.map(p => <span key={p} className={props.currentPage == p ? s.select : s.item} onClick={() => props.onPageCanged(p)}> {p}</span>)}
    </div>
    {
      props.users.map(el => <div key={el.id}>
        <div>{el.name}</div>
        <NavLink to={`/profile/`+el.id}>
          <img className={s.photo} src={el.photos.large ? el.photos.large : "https://www.w3schools.com/howto/img_avatar2.png"} alt="" />
        </NavLink>
        {el.followed ?
          <button className={[s.btn, s.unfollow].join(' ')} onClick={() => { props.unFollow(el.id) }}>UnFollow</button> :
          <button className={[s.btn, s.follow].join(' ')} onClick={() => { props.follow(el.id) }}>Follow</button>}
      </div>)
    }
  </div>);
}

export default Users;
