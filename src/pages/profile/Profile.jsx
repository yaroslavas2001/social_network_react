import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (<div>
    <ProfileInfo />

    <MyPosts 
    posts={props.profilePage.posts} 
    newPostText={props.profilePage.newPostText}
    distpatch={props.distpatch}
    />
  </div>);
}

export default Profile;
