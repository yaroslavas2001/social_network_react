import React from "react";
// import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import { Field, reduxForm } from "redux-form";
import { required, maxLenghtCreator } from "../../../../utils/validator/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";

const maxLenght10 = maxLenghtCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newPostText"
        placeholder="Введите сообщение"
        validate={[required, maxLenght10]}></Field>
      <button >Add post</button>
    </form>
  )
}
const ReduxAddPostForm = reduxForm({
  form: 'AddPostForm'
})(AddPostForm)

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => <Post key={index} message={el.name} />)
  const onSubmit = (formData) => {
    props.addPost(formData.newPostText)
  }
  return (<div >
    <h3>My posts</h3>
    <ReduxAddPostForm onSubmit={onSubmit} />
    {postsElements}
  </div>);
}

export default MyPosts;
