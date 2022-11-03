const SEND_MESSAGE = "SEND-MESSAGE"
// const UPDETE_NEW_MESSAGE_TEXT = 'UPDETE-NEW-MESSAGE-TEXT'
let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      // let text = state.newMessageText;
      let newMessage = {
        id: 6, message: action.newText,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    // case UPDETE_NEW_MESSAGE_TEXT: {
    //   return { ...state , newMessageText :action.newText};
    // }
    default: return state;
  }

}
export const sentMessage = (text) => ({ type: SEND_MESSAGE, newText: text })

// export const updateNewMessageText = (text) => ({
//   type: UPDETE_NEW_MESSAGE_TEXT, newText: text
// })
export default dialogsReducer