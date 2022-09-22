import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => <Post key={index} message={el.name} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    // alert("work")
    // debugger
    props.addPost(newPostElement.current.value)
    console.log(newPostElement.current.value)
  }
  let onChangeValue = (e) => {
    console.log("e", e.target.value)
  }
  return (<div className="content">
    <h3>My posts</h3>
    <div>
      <textarea ref={newPostElement} onChange={onChangeValue}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
    {postsElements}
  </div>);
}

export default MyPosts;
