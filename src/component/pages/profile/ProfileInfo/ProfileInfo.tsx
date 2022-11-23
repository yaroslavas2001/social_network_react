import Contact from "../../../../common/Contact/Contact";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import style from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import React, { FC } from "react"
import { ProfileContactsType, ProfileType } from "../../../../redux/profile-reducer";
type propsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
}
const ProfileInfo: FC<propsType> = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={!props.profile} />
  }
  const contacts: ProfileContactsType = props.profile.contacts
  return (
    <div className={style.content}>
      <ProfilePhoto photo={props.profile.photos.large} lookingForAJob={props.profile.lookingForAJob} />
      <div className={style.info}>
        <p className={style.name}> {props.profile.fullName} </p>
        <b>Contacts:</b>
        <Contact link={contacts.github} linkName='Github' />
        <Contact link={contacts.vk} linkName='VK' />
        <Contact link={contacts.facebook} linkName='Facebook' />
        <Contact link={contacts.instagram} linkName='Instagram' />
        <Contact link={contacts.twitter} linkName='Twitter' />
        <Contact link={contacts.website} linkName='Website' />
        <Contact link={contacts.youtube} linkName='Youtube' />
        <Contact link={contacts.mainLink} linkName='MainLink' />
        {props.profile.lookingForAJob ? (<div>
          <b>Description : </b>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
        ) : null}
        Статус:
        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />

      </div>
    </div>);
}

export default ProfileInfo;
