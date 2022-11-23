import React from "react";
import Post from "./Post/Post"

import ReduxAddPostForm from "./AddPostForm";

const MyPosts = (props: any) => {
  let postsElements = props.posts.map((el: any, index: number) => <Post key={index} message={el.name} />)
 
  const onSubmit = (formData: any) => {
    props.addPost(formData.newPostText)
  }
  
  return (<div >
    <h3>My posts</h3>
    <ReduxAddPostForm onSubmit={onSubmit} />
    {postsElements}
  </div>);
}

export default MyPosts;
