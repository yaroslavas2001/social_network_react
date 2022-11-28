import style from "./Post.module.css"
import React from "react"
import styleMain from "./../../../../../App.module.css"
import ReactTextareaAutosize from "react-textarea-autosize";
import { PostType } from "../../../../../redux/profile-reducer";
type propsType = {
  post: PostType
  deletePost: (id: number) => void

}
const Post = (props: propsType) => {
  return (<div className={styleMain.content}>
    <ReactTextareaAutosize readOnly value={props.post.text} />
    <button>Edit</button>
    <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
  </div>);
}

export default Post;
