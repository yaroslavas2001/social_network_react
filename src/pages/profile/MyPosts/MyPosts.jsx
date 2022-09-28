import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
// import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => <Post key={index} message={el.name} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    // props.addPost()
    props.distpatch(addPostCreator())
  }
  let onChangeValue = (e) => {
    let action = updateNewPostTextCreator(newPostElement.current.value)
    props.distpatch(action)
    // props.updateNewPostText(newPostElement.current.value)
  }
  return (<div className="content">
    <h3>My posts</h3>
    <div>
      <textarea ref={newPostElement} onChange={onChangeValue} value={props.newPostText} />
      <button onClick={addPost}>Add post</button>
    </div>
    {postsElements}
  </div>);
}

export default MyPosts;
