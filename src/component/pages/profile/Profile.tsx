import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react"
import { ProfileType } from "../../../redux/profile-reducer";
type propsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
}
const Profile = (props: propsType) => {
  return (<>
    <ProfileInfo profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
    <MyPostsContainer />
  </>);
}

export default Profile;
