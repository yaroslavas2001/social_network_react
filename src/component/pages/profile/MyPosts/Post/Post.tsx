import style from "./Post.module.css"
import React, { useState } from "react"
import ReactTextareaAutosize from "react-textarea-autosize";
import { PostType } from "../../../../../redux/profile-reducer";
import { checkTextEmpty } from "../../../../../utils/validator/validators";
import BaseButton from "../../../../../common/Button/BaseButton";
import DialogWindow from "../../../../../common/DialogWindow/DialogWindow";
import ContentBlock from "../../../../../common/ContentBlock/ContentBlock";
import { join } from "../../../../../utils/function";
type propsType = {
  post: PostType
  isDarkTheme: boolean
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
  let styleColor = props.isDarkTheme ? style.black : style.light
  return (
    <ContentBlock isDarkTheme={props.isDarkTheme}>
      <div className={join([style.textarea_block, styleColor])}>
        <ReactTextareaAutosize readOnly={!editMode} value={value}
          onChange={ev => setTextPost(ev.target.value)}
        />
      </div>

      <div>{error}</div>
      {!editMode && <>
        <BaseButton isSmall onClick={updateText()} value="Edit" className={[style.btn_indent]} />
        <BaseButton isSmall onClick={deletePost()} value="Delete" />    </>}
      {editMode && <>
        <BaseButton isSmall value="Save" onClick={save()} className={[style.btn_indent]} />
        <BaseButton isSmall isMutedStyle={true} value="Cansel" onClick={cansel()} />    </>}
      {/* {showWindowDelete &&  */}
      <DialogWindow id={props.post.id}
        isShow={showWindowDelete}
        text="Are you sure you want to delete the post?"
        agreement={agreement} cansel={canselDalete} />

    </ContentBlock>
  );
}

export default Post;
