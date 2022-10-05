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
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: state.newPostText,
        like: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDETE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default: return state
  }
}
export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (text) => ({
  type: UPDETE_NEW_POST_TEXT, newText: text
})

export default profileReducer