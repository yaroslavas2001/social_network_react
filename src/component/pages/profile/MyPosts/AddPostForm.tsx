import React, { FC, useState, useEffect } from "react";
import styleMain from "./../../../../App.module.css"
import style from "./MyPosts.module.css"
import { join } from "../../../../utils/function";
import { ProfileType } from "../../../../api/api";
import defaultPhoto from "./../../../../style/default_user.png"
import TextareaAutosize from 'react-textarea-autosize';
import { checkTextEmpty } from "../../../../utils/validator/validators";

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
