import Contact, { ContactType } from "../../../../../common/Contact/Contact";
import Preloader from "../../../../../common/Preloader/Preloader";
import style from "./../ProfileInfo.module.css"
import React, { FC, useState } from "react"
import { ProfileContactsType, ProfileDetailType, ProfileType } from "../../../../../api/api";
import ReduxProfileContactsForm, { ProfileContactsFormFieldType } from "./ProfileContactsForm";
import BaseButton from "../../../../../common/Button/BaseButton";
type propsType = {
  profile: ProfileType
  isAuth: boolean
  isAutorizedUserId: boolean
  setProfileDetail: (aboutMe: ProfileDetailType) => void
}
const ProfileContacts: FC<propsType> = ({ profile, isAuth, isAutorizedUserId, setProfileDetail }) => {
  let [editMode, setEditMode] = useState(false)


  if (!profile) {
    return <Preloader isFetching={!profile} />
  }

  const contacts: ProfileContactsType = profile.contacts
  let contactArray: Array<ContactType> = [
    { link: contacts.github, linkName: 'Github' },
    { link: contacts.vk, linkName: 'VK' },
    { link: contacts.facebook, linkName: 'Facebook' },
    { link: contacts.instagram, linkName: 'Instagram' },
    { link: contacts.twitter, linkName: 'Twitter' },
    { link: contacts.website, linkName: 'Website' },
    { link: contacts.mainLink, linkName: 'MainLink' },
  ]

  const onSubmit = (data: any) => {

    console.log("data", data)
  }
  const editData = () => () => {
    setEditMode(true)
  }
  const contactElement = contactArray.map((el, index) => <Contact key={el.linkName} link={el.link} linkName={el.linkName} />)
  return (
    <>
      <p className={style.name}> {profile.fullName} </p>
      Contacts:
      {contactElement}
      {profile.lookingForAJob ? (<>
        Description: 
        {profile.lookingForAJobDescription}
      </>) : null}
      {isAutorizedUserId && !editMode ?
        <BaseButton value="Edit information" onClick={editData()} />
        : ''}
      {editMode && <ReduxProfileContactsForm contacts={profile.contacts} onSubmit={onSubmit} />}
    </>);
}

export default ProfileContacts;
