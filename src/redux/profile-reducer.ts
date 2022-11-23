import { profileAPI } from "../api/api"

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"
type PostType = {
  id: number
  name: string
  like: number | null
}
export type ProfileContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: boolean
  fullName: string
  contacts: ProfileContactsType
  photos: {
    small: string
    large: string
  }
}
type InitialStateType = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string
  newPostText:string
}
let initialState: InitialStateType = {
  posts: [
    { id: 0, name: "How are you?", like: 3 },
    { id: 1, name: "It's my first post", like: 0 },
  ],
  profile: null,
  status: '',
  newPostText:''
}
const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
export const addPost = (newPostText: string) => ({ type: ADD_POST, newPostText })
export const deletePost = (idPost: number) => ({ type: DELETE_POST, idPost })

export const setUserProfile = (profile:ProfileType) => ({
  type: SET_USER_PROFILE, profile
})
export const setStatus = (status: string) => ({
  type: SET_STATUS, status
})
export const setProfile = (profileId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(profileId)
  dispatch(setUserProfile(data))

}
export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))

}
export const updateStatus = (statusText: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(statusText)

  if (data.resultCode === 0)
    dispatch(setStatus(statusText))

}
export default profileReducer