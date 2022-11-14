import { profileAPI } from "../api/api"

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"

let initialState = {
  posts: [
    { id: 0, name: "How are you?", like: 3 },
    { id: 1, name: "It's my first post", like: 0 },
  ],
  profile: null,
  status: '',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: action.newPostText,
        like: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.idPost)
      }
    }
    default: return state
  }
}
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (idPost) => ({ type: DELETE_POST, idPost })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
  type: SET_STATUS, status
})
export const setProfile = (profileId) => async (dispatch) => {
  const data = await profileAPI.getProfile(profileId)
  dispatch(setUserProfile(data))

}
export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))

}
export const updateStatus = (statusText) => async (dispatch) => {
  const data = await profileAPI.updateStatus(statusText)

  if (data.resultCode === 0)
    dispatch(setStatus(statusText))

}
export default profileReducer