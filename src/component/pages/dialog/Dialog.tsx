import React from "react";
import style from "./Dialog.module.css"
import ReduxDialogForm from "./dialogForm/DialogForm";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialog = (props: any) => {
  let dialogsElement = props.dialogs.map((el: any, index: number) => <DialogItem key={index} name={el.name} id={el.id} />)
  let messagesElement = props.messages.map((el: any, index: number) => <Message key={index} message={el.message} id={el.id} />)
  const onSubmit = (formData: any) => {
    props.sentMessage(formData.newMessageText)
  }
  return (<div className={style.dialogs}>
    <div className={style.dialogs_items}>
      {dialogsElement}
    </div>
    <div className={style.messages}>
      <div className={style.message}>
        {messagesElement}
      </div>
      <ReduxDialogForm onSubmit={onSubmit} />
    </div>
  </div>);
}

export default Dialog;
