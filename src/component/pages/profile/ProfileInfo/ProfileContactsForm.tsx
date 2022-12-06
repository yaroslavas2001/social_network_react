import { reduxForm } from "redux-form"
import style from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC, FormEvent } from "react"
import { createField, Input } from "../../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../../utils/validator/validators"
import { ProfileContactsType, ProfileDetailType } from "../../../../api/api"
import BaseButton from "../../../../common/Button/BaseButton"

const maxLenght50 = maxLenghtCreator(50)
type LoginFormPropsType = {
  contacts: ProfileContactsType
  // _error: any
  onSubmit: (data: any) => void
}
export type ProfileContactsFormFieldType = {
  aboutMe: string
  facebook: string
  github: string
}
const ProfileContactsForm: FC<LoginFormPropsType> = ({ onSubmit, contacts }) => {
  const onSubmitData = (e: any) => {
    e.preventDefault();
    console.log("e", e)
    // onSubmit()
  }
  return (
    <form onSubmit={onSubmitData}>
      {createField("About Me", 'aboutMe', [required, maxLenght50], Input)}
      {createField("facebook", 'facebook', [required, maxLenght50], Input)}
      {createField("github", 'github', [required, maxLenght50], Input)}
      {createField("VK", 'vk', [required, maxLenght50], Input)}
      {createField("Instagram", 'instagram', [required, maxLenght50], Input)}
      {createField("Twitter", 'twitter', [required, maxLenght50], Input)}
      {createField("Website", 'website', [required, maxLenght50], Input)}
      {createField("MainLink", 'mainLink', [required, maxLenght50], Input)}
      {createField("FullName", 'fullName', [required, maxLenght50], Input)}
      {createField("LookingForAJobDescription", 'lookingForAJobDescription', [required, maxLenght50], Input)}
      {createField(null, 'lookingForAJob', [],
        'input', { type: "checkbox" }, "lookingForAJob")}
      {/* <BaseButton onClick={() => { }} value="Save" /> */}
      <button>Save</button>
    </form>
  )
}

const ReduxProfileContactsForm = reduxForm<ProfileContactsFormFieldType, LoginFormPropsType>({
  form: 'contact'
})(ProfileContactsForm)

export default ReduxProfileContactsForm