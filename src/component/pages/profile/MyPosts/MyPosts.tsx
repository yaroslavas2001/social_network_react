import React from "react";
import Post from "./Post/Post"
import style from "./MyPosts.module.css"
import ReduxAddPostForm, { AddPostFormFieldType } from "./AddPostForm/AddPostForm";
import { PostType } from "../../../../redux/profile-reducer";
import { ProfileType } from "../../../../api/api";
type MapStateToPropsType = {
  newPostText: string
  posts: Array<PostType>
  profile: ProfileType
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
  deletePost: (id: number) => void
  updatePost: (idPost: number, newText: string) => void
}
type propsType = MapStateToPropsType & MapDispatchToPropsType

const MyPosts = (props: propsType) => {

  let postsElements = props.posts.map((el: PostType, index: number) =>
    <Post key={el.id} post={el} deletePost={props.deletePost} updatePost={props.updatePost} />)

  const onSubmit = (value: string) => {
    props.addPost(value)
  }

  return (< >
    <ReduxAddPostForm onSubmit={onSubmit} profile={props.profile} />
    <p>My posts:</p>
    {postsElements}
  </>);
}

export default MyPosts;
