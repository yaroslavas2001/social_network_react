import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"
const DialogItem = (probs) => {
  let path = "/dialog/" + probs.id
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{probs.name}</NavLink>
    </div>
  );
}
const Message = (probs) => {
  return (
    <div className={s.message}>
      {probs.message}
    </div>
  );
}
const Dialog = () => {
  let dialogs = [
    { id: 0, name: "Andrew" },
    { id: 1, name: "Sveta" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Micha" },
    { id: 5, name: "Slava" },
  ]
  let messages = [
    { id: 0, message: "Hi" },
    { id: 1, message: "How are you?" },
    { id: 2, message: "What do you do?" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Bye" },
    { id: 5, message: "Where are you?" },
  ]
  let dialogsElement = dialogs.map((el) => <DialogItem name={el.name} id={el.id} />)
  let messagesElement = messages.map((el) => <Message message={el.message} id={el.id} />)

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
