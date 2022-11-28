import React, { FC, useState, useEffect } from "react";
import styleMain from "./../../../../App.module.css"
import style from "./MyPosts.module.css"
import { join } from "../../../../utils/function";
import { ProfileType } from "../../../../api/api";
import defaultPhoto from "./../../../../style/default_user.png"
import TextareaAutosize from 'react-textarea-autosize';

type AddPostFormType = {
  profile: ProfileType
  onSubmit: (value: any) => void
}
export type AddPostFormFieldType = {
  newPostText: string
}
const AddPostForm: FC<AddPostFormType> = ({ profile, onSubmit }) => {
  const photo = profile?.photos?.large ? profile.photos.large : defaultPhoto
  let [value, setTextPost] = useState('')
  let [error, setErrorText] = useState('')

  const sentPostText = () => {
    const textWithoutLetters = value.replace(/[\n\r]/g, '')
    if (textWithoutLetters.length === 0 && value.length > 0)
      setErrorText("Don't post empty space")
    else if (textWithoutLetters.length === 0 && value.length === 0)
      setErrorText("Don't post empty post")
    else if (value.replace(/[\n\r]/g, '').length > 0 && value.length > 0) {
      onSubmit(value)
      setTextPost("")
      setErrorText("")
    }

  }
  useEffect(() => {
    if (value.length === 0)
      setTextPost("")
  }, [value])

  return (
    <form className={join([styleMain.content, style.block])}>
      <img src={photo} alt="photo user" className={style.photo_user} />
      <TextareaAutosize value={value}
        onChange={ev => setTextPost(ev.target.value)}
        placeholder="Anything new?"
      />
      <button className={style.btn} onClick={sentPostText}>Add post</button>
      <div>{error}</div>
    </form>
  )
}

export default AddPostForm;
