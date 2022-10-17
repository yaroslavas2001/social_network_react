import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import s from "./Dialog.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

class DialogClass extends React.Component {
  constructor(props) {
    super(props)
  }
  onChangeValue = (e) => {
    this.props.onChangeValue(e.target.value)
  }
  sendMessage = () => {
    this.props.sendMessage()
  }
  render() {
    let dialogsElement = this.props.dialogs.map((el, index) => <DialogItem key={index} name={el.name} id={el.id} />)
    let messagesElement = this.props.messages.map((el, index) => <Message key={index} message={el.message} id={el.id} />)
    return (
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          <div className={s.message}>
            {messagesElement}
          </div>
          <div className={s.add_new_message_block}>
            <textarea onChange={this.onChangeValue} value={this.props.newMessageText} />
            <button onClick={this.sendMessage}>SendMessage</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DialogClass;
