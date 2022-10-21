import profileReducer from "../profile-reducer"
import dialogsReducer from "../dialogs-reducer"
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, name: "How are you?", like: 3 },
        { id: 1, name: "It's my first post", like: 0 },
      ],
      newPostText: "текст нового сообщения",
    },
    dialogsPage: {
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
    },
  },
  dispatch(action) {//{type:} / объект
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(store);

  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("Сюда не зайдет, так как функция переопределена при запуске")
  },
  subscribe(observer) {
    store._callSubscriber = observer // observer - наблюдатель / AddEventListner / publishin-subcriber патерны
  }
}


export default store
