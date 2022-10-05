import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
  return (<div>
    <ProfileInfo />

    <MyPostsContainer 
    // posts={props.profilePage.posts} 
    // newPostText={props.profilePage.newPostText}
    // dispatch={props.dispatch}
    // store={props.store}

    />
  </div>);
}

export default Profile;
