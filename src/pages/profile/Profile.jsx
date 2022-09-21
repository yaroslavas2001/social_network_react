import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (<div>
    <ProfileInfo/>
    <MyPosts posts={props.profilePage.posts} />
  </div>);
}

export default Profile;
