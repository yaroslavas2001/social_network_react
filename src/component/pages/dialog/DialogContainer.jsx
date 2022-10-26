import { addMessage, updateNewMessageText } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import s from "./Dialog.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import React from "react";
import { compose } from "redux";

// import DialogClass from "./DialogClass";
// const DialogContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState()
//           let onChangeValue = (text) => {
//             let action = updateNewMessageTextCreator(text)
//             store.dispatch(action)
//           }
//           let onSendMessage = () => {
//             store.dispatch(addMessageCreator())
//           }
//           return <Dialog
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages}
//             newMessageText={state.dialogsPage.newMessageText}
//             sendMessage={onSendMessage}
//             onChangeValue={onChangeValue} />
//         }
//       }</StoreContext.Consumer>
//   )
// }

class DialogClass extends React.Component {
  onChangeValue = (e) => {
    this.props.updateNewMessageText(e.target.value)
  }
  sendMessage = () => {
    this.props.addMessage()
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
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}
export default compose(connect(mapStateToProps, {
  addMessage, updateNewMessageText
}), 
withAuthRedirect
)(DialogClass)
