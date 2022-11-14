import Paginator from "../../../common/Paginator/Paginator";
import User from "./User";

const Users = ({ totalUsersCount, pageSize, currentPage, onPageCanged, ...props }) => {
  const imgDefaultUser = "https://www.w3schools.com/howto/img_avatar2.png"
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  // let pages = []
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i)
  // }
  return (<div className="test">
    <Paginator currentPage={currentPage}
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      onPageCanged={onPageCanged}
    />
    {
      props.users.map(user =>
        <User user={user} {...props} key={user.id} />
      )
    }
  </div>);
}

export default Users;
