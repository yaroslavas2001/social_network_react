import React, { FC, useState, useEffect } from "react";
import style from "./AddPostForm.module.css"
import { ProfileType } from "../../../../../api/api";
import defaultPhoto from "./../../../../../assets/default_user.png"

import TextareaAutosize from 'react-textarea-autosize';
import { checkTextEmpty } from "../../../../../utils/validator/validators";
import BaseButton from "../../../../../common/Button/BaseButton";
import ContentBlock from "./../../../../../common/ContentBlock/ContentBlock"
import { join } from "../../../../../utils/function";

type AddPostFormType = {
  profile: ProfileType
  isDarkTheme: boolean
  onSubmit: (value: any) => void
}
export type AddPostFormFieldType = {
  newPostText: string
}
const AddPostForm: FC<AddPostFormType> = ({ profile, onSubmit, isDarkTheme }) => {
  const photo = profile?.photos?.large ? profile.photos.large : defaultPhoto
  let [value, setTextPost] = useState('')
  let [error, setErrorText] = useState('')

  const sentPostText = () => {
    if (checkTextEmpty(value) === undefined) {
      onSubmit(value)
      setTextPost("")
      setErrorText("")
    }
    else setErrorText(checkTextEmpty(value))

  }
  useEffect(() => {
    if (value.length === 0)
      setTextPost("")
  }, [value])
  let styleColor = isDarkTheme ? style.black : style.light

  return (
    <ContentBlock isDarkTheme={isDarkTheme}>
      <form className={join([style.block,styleColor]) }>
        <img src={photo} alt="photo user" className={style.photo_user} />
        <TextareaAutosize value={value}
          onChange={e => setTextPost(e.target.value)}
          placeholder="Anything new?"
          className={style.test}
        />
        <div>{error}</div>
        <BaseButton value="Add post" onClick={sentPostText} className={[style.btn]} />
      </form>
    </ContentBlock>

  )
}

export default AddPostForm;
