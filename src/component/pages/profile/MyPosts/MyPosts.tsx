import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"
import ReduxAddPostForm from "./AddPostForm";

const MyPosts = (props: any) => {
  let postsElements = props.posts.map((el: any, index: number) =>
    <Post key={index} message={el.name} />)

  const onSubmit = (formData: any) => {
    props.addPost(formData.newPostText)
  }

  return (< >
    <ReduxAddPostForm onSubmit={onSubmit} />
    {postsElements}
  </>);
}

export default MyPosts;
