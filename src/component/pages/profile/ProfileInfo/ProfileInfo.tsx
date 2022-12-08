import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import style from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./status/ProfileStatusWithHook";
import React, { FC } from "react"
import { ProfileDetailType, ProfileType } from "../../../../api/api";
import styleMain from "./../../../../App.module.css"
import { join } from "../../../../utils/function";
import ProfileContacts from "./contacts/ProfileContacts";
type propsType = {
  profile: ProfileType
  status: string
  isAuth: boolean
  isAutorizedUserId: boolean
  updateStatus: (status: string) => void
  setProfilePhoto: (photo: FormData) => void
  setProfileDetail: (aboutMe: ProfileDetailType) => void
}
const ProfileInfo: FC<propsType> = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={!props.profile} />
  }
  return (
    <div className={join([style.content, styleMain.content])}>
      <ProfilePhoto photo={props.profile.photos.large}
        setProfilePhoto={props.setProfilePhoto}
        lookingForAJob={props.profile.lookingForAJob}
        isAutorizedUserId={props.isAutorizedUserId} />
      <div className={style.info}>
        <ProfileContacts
          profile={props.profile}
          isAuth={props.isAuth}
          setProfileDetail={props.setProfileDetail}
          isAutorizedUserId={props.isAutorizedUserId}
        />
        <ProfileStatusWithHook status={props.status}
          isAuth={props.isAuth}
          isAutorizedUserId={props.isAutorizedUserId}
          updateStatus={props.updateStatus} />
      </div>
    </div>);
}

export default ProfileInfo;
