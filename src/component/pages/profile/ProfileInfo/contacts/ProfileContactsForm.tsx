import { reduxForm } from "redux-form"
import React, { FC, FormEvent } from "react"
import { createField, Input, Textarea } from "../../../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../../../utils/validator/validators"
import BaseButton from "../../../../../common/Button/BaseButton"
import styleFormsControl from "./../../../../../common/FormsControls/FormsControls.module.css"
import LableBlock from "../../../../../common/LableBlock/LableBlock"
import { ProfileType } from "../../../../../api/api"
const maxLenght100 = maxLenghtCreator(100)
type LoginFormPropsType = {
  handleSubmit?: () => void
  _error?: any
}
const ProfileContactsForm: FC<LoginFormPropsType> = ({ handleSubmit, _error }) => {
  console.log("error",_error)
  return (
    <form onSubmit={handleSubmit}>
      <LableBlock name="About Me">
        {createField("About Me", 'aboutMe', [required, maxLenght100], Input)}
      </LableBlock>
      <LableBlock name="FullName">
        {createField("FullName", 'fullName', [required, maxLenght100], Input)}
      </LableBlock>
      {createField(null, 'lookingForAJob', [],
        'input', { type: "checkbox" }, "lookingForAJob")}
      {createField("LookingForAJobDescription", 'lookingForAJobDescription', [maxLenght100], Textarea)}

      <LableBlock name="Facebook">
        {createField("facebook", 'contacts.facebook', [maxLenght100], Input)}
      </LableBlock>
      <LableBlock name="Github">
        {createField("github", 'contacts.github', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="VK">
        {createField("VK", 'contacts.vk', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="Instagram">
        {createField("Instagram", 'contacts.instagram', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="Twitter">
        {createField("Twitter", 'contacts.twitter', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="Website">
        {createField("Website", 'contacts.website', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="MainLink">
        {createField("MainLink", 'contacts.mainLink', [maxLenght100], Input)}
      </LableBlock>

      <LableBlock name="Youtube">
        {createField("Youtube", 'contacts.youtube', [maxLenght100], Input)}
      </LableBlock>
      {/* {createField("Skype", 'contacts.skype', [maxLenght100], Input)} */}
      {/* {createField("Icq", 'contacts.icq', [maxLenght100], Input)} */}
      {/* {createField("Email", 'contacts.email', [maxLenght100], Input)} */}
      {/* {createField("GooglePlus", 'contacts.googlePlus', [maxLenght100], Input)} */}
      {/* {createField("WhatsApp", 'contacts.whatsApp', [maxLenght100], Input)} */}
      {_error && <div className={styleFormsControl.formSummaryError}>
        {_error}
      </div>}
      <BaseButton onClick={() => { }} value="Save" />
      {/* <button>Save</button> */}
    </form>
  )
}

const ReduxProfileContactsForm = reduxForm<ProfileType, LoginFormPropsType>({
  form: 'contact-user',
})(ProfileContactsForm)

export default ReduxProfileContactsForm