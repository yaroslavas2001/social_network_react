import style from "./Post.module.css"
import React, { useEffect, useState } from "react"
import styleMain from "./../../../../../App.module.css"
import ReactTextareaAutosize from "react-textarea-autosize";
import { PostType } from "../../../../../redux/profile-reducer";
import { checkTextEmpty } from "../../../../../utils/validator/validators";
import BaseButton from "../../../../../common/Button/BaseButton";
import ModalWindow from "../../../../../common/ModalWindow/ModalWindow";
type propsType = {
  post: PostType
  deletePost: (id: number) => void
  updatePost: (idPost: number, newText: string) => void
}
const Post = (props: propsType) => {
  let [editMode, setEditMode] = useState(false)
  let [value, setTextPost] = useState(props.post.text)
  let [error, setErrorText] = useState('')
  let [showWindowDelete, setshowWindowDelete] = useState(false)

  const updateText = () => () => {
    setEditMode(true)
  }
  const save = () => () => {
    if (checkTextEmpty(value) === undefined) {
      props.updatePost(props.post.id, value)
      setEditMode(false)
      setErrorText("")
    }
    else setErrorText(checkTextEmpty(value))
  }
  const cansel = () => () => {
    setTextPost(props.post.text)
    setEditMode(false)
    setErrorText("")
  }
  const deletePost = () => () => {
    setshowWindowDelete(true)
  }
  const agreement = (id: number) => {
    props.deletePost(id)
    setshowWindowDelete(false)
  }
  const canselDalete = () => {
    setshowWindowDelete(false)
  }
  return (<div className={styleMain.content}>
    <ReactTextareaAutosize readOnly={!editMode} value={value}
      onChange={ev => setTextPost(ev.target.value)}
    />
    <div>{error}</div>
    {!editMode && <>
      <BaseButton isSmall onClick={updateText()} value="Edit" className={[style.btn_indent]} />
      <BaseButton isSmall onClick={deletePost()} value="Delete" />    </>}
    {editMode && <>
      <BaseButton isSmall value="Save" onClick={save()} className={[style.btn_indent]} />
      <BaseButton isSmall isMutedStyle={true} value="Cansel" onClick={cansel()} />    </>}
    {showWindowDelete && <ModalWindow id={props.post.id}
      text="Are you sure you want to delete the post?"
      agreement={agreement} cansel={canselDalete} />}
  </div>);
}

export default Post;
