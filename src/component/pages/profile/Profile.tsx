import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react"
import { ProfileDetailType, ProfileType } from "../../../api/api";
type propsType = {
  profile: ProfileType
  status: string
  autorizedUserId: number
  profileId: number
  isAuth: boolean
  updateStatus: (status: string) => void
  setProfilePhoto: (photo: FormData) => void
  setProfileDetail: (aboutMe: ProfileDetailType) => void
}
const Profile = (props: propsType) => {
  const isAutorizedUserId = props.autorizedUserId === props.profile?.userId

  return (<>
    <ProfileInfo profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      isAuth={props.isAuth}
      setProfilePhoto={props.setProfilePhoto}
      setProfileDetail={props.setProfileDetail}
      isAutorizedUserId={isAutorizedUserId}
    />
    {isAutorizedUserId &&
      <MyPostsContainer />
    }

  </>);
}

export default Profile;
