const SEND_MESSAGE = "SEND-MESSAGE"
const UPDETE_NEW_MESSAGE_TEXT = 'UPDETE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let text = state.newMessageText;
      let newMessage = {
        id: 6, message: text,
      }
      state.messages.push(newMessage)
      state.newMessageText = ""
      return state;
    }
    case UPDETE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText
      return state;
    }
    default: return state;
  }

}
export const addMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (text) => ({
  type: UPDETE_NEW_MESSAGE_TEXT, newText: text
})
export default dialogsReducer