import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../../common/FormsControls/FormsControls";
import { maxLenghtCreator, required } from "../../../../utils/validator/validators";
import style from "./DialogForm.module.css"

const maxLenght100 = maxLenghtCreator(100)

const DialogForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.add_new_message_block}>
        <Field component={Textarea} name="newMessageText"
          placeholder="Введите сообщение"
          validate={[required, maxLenght100]}
        />
        <button >SendMessage</button>
      </div>
    </form>
  )
}

const ReduxDialogForm = reduxForm({
  form: 'dialogAddMessageForm'
})(DialogForm)


export default ReduxDialogForm;
