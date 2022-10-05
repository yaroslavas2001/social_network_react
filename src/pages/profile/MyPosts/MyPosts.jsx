import React from "react";
// import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => <Post key={index} message={el.name} />)
  let newPostElement = React.createRef();
  // let test ={
  //   a:13213,
  //   b:[1,3,5],
  //   c:{
  //     ac:1,
  //     am:3
  //   }
  // }
  // let test2 ={...test}
  // console.log("test2",test2)
  let onAddPost = () => {
    props.addPost()
  }
  let onChangeValue = (e) => {
    props.updateNewPostText(newPostElement.current.value)
  }
  // let TestCopy=()=>{
  //   test2.c.ac = 13
  //   test2.b = [1]
  //   console.log("test",test)
  //   console.log("test2",test2)

  // }
  return (<div className="content">
    <h3>My posts</h3>
    <div>
      <textarea ref={newPostElement} onChange={onChangeValue} value={props.newPostText} />
      <button onClick={onAddPost}>Add post</button>
      {/* <button onClick={TestCopy}>testCopy</button> */}

    </div>
    {postsElements}
  </div>);
}

export default MyPosts;
