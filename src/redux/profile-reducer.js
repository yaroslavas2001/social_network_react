const ADD_POST = "ADD-POST"
const UPDETE_NEW_POST_TEXT = 'UPDETE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 0, name: "How are you?", like: 3 },
    { id: 1, name: "It's my first post", like: 0 },
  ],
  newPostText: "текст нового сообщения",
}
const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      name: state.newPostText,
      like: 0
    }
    state.posts.push(newPost)
    state.newPostText = ""
  } else if (action.type === UPDETE_NEW_POST_TEXT) {
    state.newPostText = action.newText
  }
  return state;
}
export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => ({
  type: UPDETE_NEW_POST_TEXT, newText: text
})

export default profileReducer