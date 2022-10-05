import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../redux/store-context";
import Dialog from "./Dialog";
import {connect} from "react-redux"
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
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(addMessageCreator()) },
    onChangeValue: (text) => {
      let action = updateNewMessageTextCreator(text)
      dispatch(action)
    }
  }
}
const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)
export default SuperDialogContainer;
