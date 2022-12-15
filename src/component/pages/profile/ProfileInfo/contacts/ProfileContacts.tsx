import Contact, { ContactType } from "../../../../../common/Contact/Contact";
import Preloader from "../../../../../common/Preloader/Preloader";
import style from "./ProfileContacts.module.css"
import React, { FC, useState } from "react"
import { ProfileContactsType, ProfileType } from "../../../../../api/api";
import ReduxProfileContactsForm, { } from "./ProfileContactsForm";
import BaseButton from "../../../../../common/Button/BaseButton";
import LableBlock from "../../../../../common/LableBlock/LableBlock";
type propsType = {
  profile: ProfileType
  isAuth: boolean
  isAutorizedUserId: boolean
  setProfileDetail: (aboutMe: ProfileType) => void
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
    { link: contacts.youtube, linkName: 'Youtube' },
    // { link: contacts.skype, linkName: 'Skype' },
    // { link: contacts.icq, linkName: 'Icq' },
    // { link: contacts.googlePlus, linkName: 'GooglePlus' },
    // { link: contacts.whatsApp, linkName: 'WhatsApp' },
    // { link: contacts.email, linkName: 'Email' },
  ]

  const onSubmit = (data: ProfileType) => {
    setProfileDetail(data)
    setEditMode(false)
  }
  const editData = () => () => {
    setEditMode(true)
  }
  const contactElement = contactArray.map((el, index) => <Contact key={el.linkName} link={el.link} linkName={el.linkName} />)
  let isNotEmptyContact = contactArray.some((el) => el.link != null)
  return (
    <>
      {editMode ? <ReduxProfileContactsForm initialValues={profile} onSubmit={onSubmit} /> :
        <div>
          <h1 className={style.name}> {profile.fullName} </h1>
          <LableBlock name="About Me:" isBold margin={6} >
            {profile?.aboutMe != null ? profile.aboutMe : "No information "}
          </LableBlock>
          <LableBlock name="Contacts:" isBold margin={6} >
            <>{isNotEmptyContact ? contactElement : <span>Contacts are empty</span>}   </>
          </LableBlock>
          {profile.lookingForAJob ? (
            <LableBlock name="Description:" isBold margin={6}>
              {profile.lookingForAJobDescription}
            </LableBlock>
          ) : null}
        </div>
      }
      {isAutorizedUserId && !editMode ?
        <BaseButton value="Edit information" onClick={editData()} />
        : ''}
    </>);
}

export default ProfileContacts;
