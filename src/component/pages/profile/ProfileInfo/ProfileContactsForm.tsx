import { reduxForm } from "redux-form"
import style from "./../../../common/FormsControls/FormsControls.module.css"
import React, { FC, FormEvent } from "react"
import { createField, Input } from "../../../../common/FormsControls/FormsControls"
import { maxLenghtCreator, required } from "../../../../utils/validator/validators"
import { ProfileContactsType, ProfileDetailType } from "../../../../api/api"

const maxLenght50 = maxLenghtCreator(50)
type LoginFormPropsType = {
  contacts: ProfileContactsType
  // _error: any
  onSubmit: (data:any) => void
}
export type ProfileContactsFormFieldType = {
  aboutMe: string
  facebook:string
  github:string
}
const ProfileContactsForm: FC<LoginFormPropsType> = ({ onSubmit, contacts }) => {
  return (
    <form onSubmit={onSubmit}>
      {createField("Login", 'aboutMe', [required, maxLenght50], Input)}
      {createField("facebook", 'facebook', [required, maxLenght50], Input)}
      {createField("github", 'github', [required, maxLenght50], Input)}

      {/* {createField("Password", 'password', [required, maxLenght50],
        Input, { type: "password" })}

      {createField(null, 'rememberMe', [],
        'input', { type: "checkbox" }, "Remember me")} */}
      {/* {_error && <div className={style.formSummaryError}>
        {_error}
      </div>} */}
      <button >Сохранить</button>
    </form>
  )
}

const ReduxProfileContactsForm = reduxForm<ProfileContactsFormFieldType, LoginFormPropsType>({
  form: 'contact'
})(ProfileContactsForm)

export default ReduxProfileContactsForm