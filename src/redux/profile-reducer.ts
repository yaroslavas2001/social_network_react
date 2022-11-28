import { profileAPI, ProfileType, ResultCodeEnum } from "../api/api"
import { Dispatch } from "redux"
import { ThunkAction } from 'redux-thunk'
import { AppReducerType } from "./redux-store"

const ADD_POST = "profile/ADD-POST"
const UPDATE_POST = "profile/ADD-POST"

const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"
export type PostType = {
  id: number
  text: string
  userId: number | null
}
type InitialStateType = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string
  newPostText: string
}
let initialState: InitialStateType = {
  posts: [
    { id: 0, text: "How are you?", userId: 3 },
    { id: 1, text: "It's my first post", userId: 0 },
  ],
  profile: null,
  status: '',
  newPostText: ''
}
const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random() ,
        text: action.newPostText,
        userId: 0
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
type AddPostType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostType => ({ type: ADD_POST, newPostText })

type DeletePostType = {
  type: typeof DELETE_POST
  idPost: number
}
export const deletePost = (idPost: number): DeletePostType => ({ type: DELETE_POST, idPost })

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE, profile
})

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS, status
})
type ActionsType = AddPostType | DeletePostType | SetUserProfileType | SetStatusType
type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const setProfile = (profileId: number): ThunkType => async (dispatch: DispatchType) => {
  const data = await profileAPI.getProfile(profileId)
  dispatch(setUserProfile(data))

}
export const getStatus = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))

}
export const updateStatus = (statusText: string): ThunkType => async (dispatch: DispatchType) => {
  const data = await profileAPI.updateStatus(statusText)

  if (data.resultCode === ResultCodeEnum.Success)
    dispatch(setStatus(statusText))

}
export default profileReducer