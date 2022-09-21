import s from "./Dialog.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialog = (props) => {

  let dialogsElement = props.dialogsPage.dialogs.map((el,index) => <DialogItem key={index} name={el.name} id={el.id} />)
  let messagesElement = props.dialogsPage.messages.map((el,index) => <Message key={index} message={el.message} id={el.id} />)

  return (<div className={s.dialogs}>
    <div className={s.dialogs_items}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messagesElement}
    </div>
  </div>);
}

export default Dialog;
