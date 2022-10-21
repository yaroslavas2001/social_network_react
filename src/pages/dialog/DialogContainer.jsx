import React from "react";
import { addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import StoreContext from "../../redux/dont-use/store-context";
import Dialog from "./Dialog";
import {connect} from "react-redux"
import DialogClass from "./DialogClass";
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
// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => { dispatch(addMessageCreator()) },
//     onChangeValue: (text) => {
//       let action = updateNewMessageTextCreator(text)
//       dispatch(action)
//     }
//   }
// }
export default  connect(mapStateToProps, {
  addMessage,updateNewMessageText
})(DialogClass)

