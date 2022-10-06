import s from "./Users.module.css"
const Users = (props) => {
  console.log("users", props.users)
  // if()
  if (props.users.length == 0) props.setUsers([
    {
      id: 2, fullName: "Yaroslava", status: 'Im looking for a job',
      photoUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      followed: true,
      location: {
        city: "Tiraspol",
        countru: "Moldova"
      }
    },
    {
      id: 3, fullName: "Slava", status: 'Im looking for a job',
      followed: false,
      photoUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      location: {
        city: "Bender",
        countru: "Moldova"
      }
    },
    {
      id: 4, fullName: "Kolya", status: 'Im looking for a job',
      followed: true,
      photoUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      location: {
        city: "Keiv",
        countru: "Ukrain"
      }
    },])
  return (<div key="1">
    {
      props.users.map(el => <div key={el.id}>
        <div>{el.fullName}</div>
        <img className={s.photo} src={el.photoUrl} alt="" />
        {el.followed ?
          <button className={[s.btn, s.unfollow].join(' ')} onClick={() => { props.unFollow(el.id) }}>UnFollow</button> :
          <button className={[s.btn, s.follow].join(' ')} onClick={() => { props.follow(el.id) }}>Follow</button>}
      </div>)
    }
  </div>);
}

export default Users;
