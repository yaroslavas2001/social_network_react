import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import style from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./status/ProfileStatusWithHook";
import React, { FC } from "react"
import { ProfileType } from "../../../../api/api";
import ProfileContacts from "./contacts/ProfileContacts";
import ContentBlock from "../../../../common/ContentBlock/ContentBlock";
type propsType = {
  profile: ProfileType
  status: string
  isAuth: boolean
  isAutorizedUserId: boolean
  isDarkTheme: boolean
  updateStatus: (status: string) => void
  setProfilePhoto: (photo: FormData) => void
  setProfileDetail: (aboutMe: ProfileType) => void
}
const ProfileInfo: FC<propsType> = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={!props.profile} />
  }
  return (
    <ContentBlock isDarkTheme={props.isDarkTheme} >
      <div className={style.content}>
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
      </div>
    </ContentBlock>


  );
}

export default ProfileInfo;
