import { rerenderEntireTree } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 0, name: "How are you?", like: 3 },
      { id: 1, name: "It's my first post", like: 0 },
    ],

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
export let addPost=(PostMessage)=>{
  let newPost={
    id:5,
    name:PostMessage,
    like:0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state);
}
export let onChange=(value)=>{

  rerenderEntireTree(state);
}
export default state
