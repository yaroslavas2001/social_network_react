import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

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
    default: return state
  }
}
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
  type: SET_STATUS, status
})
export const setProfile = (profileId) => {
  return (dispatch) => {
    profileAPI.getProfile(profileId).then(
      data => { dispatch(setUserProfile(data)) })
  }
}
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(
      data => { dispatch(setStatus(data)) })
  }
}
export const updateStatus = (statusText) => {
  return (dispatch) => {
    profileAPI.updateStatus(statusText).then(
      data => {
        console.log("data", data)
        if (data.resultCode == 0)
          dispatch(setStatus(statusText))
      })
  }
}
export default profileReducer