import Contact, { ContactType } from "../../../../common/Contact/Contact";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import style from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import React, { FC } from "react"
import { ProfileContactsType, ProfileDetailType, ProfileType } from "../../../../api/api";
import styleMain from "./../../../../App.module.css"
import { join } from "../../../../utils/function";
import ReduxProfileContactsForm, { ProfileContactsFormFieldType } from "./ProfileContactsForm";
type propsType = {
  profile: ProfileType
  isAuth: boolean
  setProfileDetail: (aboutMe: ProfileDetailType) => void
}
const ProfileContacts: FC<propsType> = ({ profile, isAuth, setProfileDetail }) => {
  if (!profile) {
    return <Preloader isFetching={!profile} />
  }
  const contacts: ProfileContactsType = profile.contacts
  let test: Array<ContactType> = [
    { link: contacts.github, linkName: 'Github' },
    { link: contacts.vk, linkName: 'VK' },
    { link: contacts.facebook, linkName: 'Facebook' },
    { link: contacts.instagram, linkName: 'Instagram' },
    { link: contacts.twitter, linkName: 'Twitter' },
    { link: contacts.website, linkName: 'Website' },
    { link: contacts.mainLink, linkName: 'MainLink' },
  ]
  const onSubmit = (data: any) => {
    console.log("data",data)
    debugger
  }
  const contact = test.map((el, index) => <Contact key={index} link={el.link} linkName={el.linkName} />)
  return (
    <>
      <p className={style.name}> {profile.fullName} </p>
      Contacts:
      {contact}
      {profile.lookingForAJob ? (<>
        Description :
        {profile.lookingForAJobDescription}
      </>) : null}
      <ReduxProfileContactsForm contacts={profile.contacts} onSubmit={onSubmit} />
    </>);
}

export default ProfileContacts;
