import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { maxLenghtCreator, required } from "../../../utils/validator/validators";
import s from "./Dialog.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
const maxLenght100 = maxLenghtCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.add_new_message_block}>
        <Field component={Textarea} name="newMessageText"
          placeholder="Введите сообщение"
          validate={[required, maxLenght100]}
        />
        <button >SendMessage</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialog = (props) => {
  let dialogsElement = props.dialogs.map((el, index) => <DialogItem key={index} name={el.name} id={el.id} />)
  let messagesElement = props.messages.map((el, index) => <Message key={index} message={el.message} id={el.id} />)
  // let onChangeValue = (e) => {
  //   props.updateNewMessageText(e.target.value)
  // }
  // let sendMessage = () => {
  //   props.addMessage()
  // }
  const onSubmit = (formData) => {
    // console.log("formData", formData)
    // props.logintMe(formData.email, formData.password,
    //     formData.rememberMe, true
    // )
    // props.updateNewMessageText(formData.newMessageText)
    props.sentMessage(formData.newMessageText)
  }
  return (<div className={s.dialogs}>
    <div className={s.dialogs_items}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      <div className={s.message}>
        {messagesElement}
      </div>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  </div>);
}

export default Dialog;
