import Contact, { ContactType } from "../../../../common/Contact/Contact";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import style from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import React, { FC } from "react"
import { ProfileContactsType, ProfileDetailType, ProfileType } from "../../../../api/api";
import styleMain from "./../../../../App.module.css"
import { join } from "../../../../utils/function";
import ProfileContacts from "./ProfileContacts";
type propsType = {
  profile: ProfileType
  status: string
  isAuth: boolean
  updateStatus: (status: string) => void
  setProfilePhoto: (photo: FormData) => void
  setProfileDetail: (aboutMe: ProfileDetailType) => void
}
const ProfileInfo: FC<propsType> = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={!props.profile} />
  }
  // const contacts: ProfileContactsType = props.profile.contacts
  // let test: Array<ContactType> = [
  //   { link: contacts.github, linkName: 'Github' },
  //   { link: contacts.vk, linkName: 'VK' },
  //   { link: contacts.facebook, linkName: 'Facebook' },
  //   { link: contacts.instagram, linkName: 'Instagram' },
  //   { link: contacts.twitter, linkName: 'Twitter' },
  //   { link: contacts.website, linkName: 'Website' },
  //   { link: contacts.mainLink, linkName: 'MainLink' },
  // ]
  // const contact = test.map((el, index) => <Contact key={index} link={el.link} linkName={el.linkName} />)
  return (
    <div className={join([style.content, styleMain.content])}>
      <ProfilePhoto photo={props.profile.photos.large}
        setProfilePhoto={props.setProfilePhoto}
        lookingForAJob={props.profile.lookingForAJob} />
      <div className={style.info}>
        <ProfileContacts
          profile={props.profile}
          isAuth={props.isAuth}
          setProfileDetail={props.setProfileDetail}
        />
        <ProfileStatusWithHook status={props.status}
          isAuth={props.isAuth}
          updateStatus={props.updateStatus} />
      </div>
    </div>);
}

export default ProfileInfo;
