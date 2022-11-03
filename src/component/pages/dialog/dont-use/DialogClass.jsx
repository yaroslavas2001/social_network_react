import React from "react";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import s from "./Dialog.module.css"
import DialogItem from "../dialogItem/DialogItem";
import Message from "../message/Message";

class DialogClass extends React.Component {
  constructor(props) {
    super(props)
    
  }
  onChangeValue = (e) => {
    this.props.updateNewMessageText(e.target.value)
  }
  sendMessage = () => {
    this.props.addMessage()
  }

  render() {
    let dialogsElement = this.props.dialogs.map((el, index) => <DialogItem key={index} name={el.name} id={el.id} />)
    let messagesElement = this.props.messages.map((el, index) => <Message key={index} message={el.message} id={el.id} />)
    // if (!this.props.isAuth)
    // return <Navigate to="/login" />

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
let AuthRedirectComponent = withAuthRedirect(DialogClass)

export default AuthRedirectComponent;
