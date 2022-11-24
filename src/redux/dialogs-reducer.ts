const SEND_MESSAGE = "dialog/SEND-MESSAGE"
type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}
type InitialStateType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
let initialState: InitialStateType = {
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
const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 6, message: action.newText,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default: return state;
  }

}
type sentMessageType = {
  type: typeof SEND_MESSAGE
  newText: string
}
export const sentMessage = (text: string): sentMessageType => ({ type: SEND_MESSAGE, newText: text })
type ActionsType = sentMessageType

export default dialogsReducer