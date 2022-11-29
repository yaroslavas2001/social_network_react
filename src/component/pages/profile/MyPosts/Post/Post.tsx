import style from "./Post.module.css"
import React, { useEffect, useState } from "react"
import styleMain from "./../../../../../App.module.css"
import ReactTextareaAutosize from "react-textarea-autosize";
import { PostType } from "../../../../../redux/profile-reducer";
import { checkTextEmpty } from "../../../../../utils/validator/validators";
type propsType = {
  post: PostType
  deletePost: (id: number) => void
  updatePost: (idPost: number, newText: string) => void

}
const Post = (props: propsType) => {
  let [editMode, setEditMode] = useState(false)
  let [value, setTextPost] = useState(props.post.text)
  let [error, setErrorText] = useState('')

  const updateText = () => {
    setEditMode(true)
  }
  const save = () => {
    if (checkTextEmpty(value) === undefined) {
      props.updatePost(props.post.id, value)
      setEditMode(false)
      setErrorText("")
    }
    else setErrorText(checkTextEmpty(value))
  }
  const cansel = () => {
    setTextPost(props.post.text)
    setEditMode(false)
    setErrorText("")
  }
  return (<div className={styleMain.content}>
    <ReactTextareaAutosize readOnly={!editMode} value={value}
      onChange={ev => setTextPost(ev.target.value)}
    />
    {!editMode && <>  <button onClick={() => updateText()}>Edit</button>
      <button onClick={() => props.deletePost(props.post.id)}>Delete</button>

    </>}
    {editMode && <>  <button onClick={() => save()}>SaveChange</button>
      <button onClick={() => cansel()}>Cansel</button>
    </>}
    <div>{error}</div>

  </div>);
}

export default Post;
