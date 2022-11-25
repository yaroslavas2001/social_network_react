import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react"
import { ProfileType } from "../../../api/api";
type propsType = {
  profile: ProfileType
  status: string
  autorizedUserId: number
  profileId: number
  updateStatus: (status: string) => void
}
const Profile = (props: propsType) => {
  const isAutorizedUserId = props.autorizedUserId === props.profile?.userId
  return (<>
    <ProfileInfo profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
    {isAutorizedUserId && <MyPostsContainer />}
  </>);
}

export default Profile;
