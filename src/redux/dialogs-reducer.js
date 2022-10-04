const SEND_MESSAGE = "SEND-MESSAGE"
const UPDETE_NEW_MESSAGE_TEXT = 'UPDETE-NEW-MESSAGE-TEXT'
let initialState={
  dialogs: [
    { id: 0, name: "Andrew" },
    { id: 1, name: "Sveta" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Micha" },
    { id: 5, name: "Slava" },
  ],
  messages: [
    { id: 0, message: "Hi" },
    { id: 1, message: "How are you?" },
    { id: 2, message: "What do you do?" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Bye" },
    { id: 5, message: "Where are you?" },
  ],
  newMessageText: "текст",
}
const dialogsReducer = (state=initialState, action) => {
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