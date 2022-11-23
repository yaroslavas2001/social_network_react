import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLenghtCreator } from "../../../../utils/validator/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";

const maxLenght10 = maxLenghtCreator(10)

const AddPostForm = (props:any) => {
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

export default ReduxAddPostForm;
