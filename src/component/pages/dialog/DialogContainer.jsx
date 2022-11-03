import { sentMessage, } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";
import Dialog from "./Dialog";

class DialogContainer extends React.Component {
  render() {
    return (
      <Dialog {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    // newMessageText: state.dialogsPage.newMessageText,
  }
}

export default compose(connect(mapStateToProps, {
  sentMessage
}),
  withAuthRedirect
)(DialogContainer)


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
