import Contact from "../../../../common/Contact/Contact";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <ProfilePhoto photo={props.profile.photos.large} lookingForAJob={props.profile.lookingForAJob} />
      <div className={s.info}>
        <p className={s.name}> {props.profile.fullName} </p>
        <b>Contacts:</b>
        <Contact link={props.profile.contacts.github} linkName='Github' />
        <Contact link={props.profile.contacts.vk} linkName='VK' />
        <Contact link={props.profile.contacts.facebook} linkName='Facebook' />
        <Contact link={props.profile.contacts.instagram} linkName='Instagram' />
        <Contact link={props.profile.contacts.twitter} linkName='Twitter' />
        <Contact link={props.profile.contacts.website} linkName='Website' />
        <Contact link={props.profile.contacts.youtube} linkName='Youtube' />
        <Contact link={props.profile.contacts.mainLink} linkName='MainLink' />
        {props.profile.lookingForAJob ? (<div>
          <b>Description : </b>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
        ) : null}
        Статус:
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}></ProfileStatus>

      </div>
    </div>);
}

export default ProfileInfo;
