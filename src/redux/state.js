let rerenderEntireTree = () => {
  console.log("Сюда не зайдет, так как функция переопределена при запуске")
}
let state = {
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
  },
}
export const addPost = () => {
  let newPost = {
    id: 5,
    name: state.profilePage.newPostText,
    like: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ""
  rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state);
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer // observer - наблюдатель / AddEventListner / publishin-subcriber патерны
}
export default state
