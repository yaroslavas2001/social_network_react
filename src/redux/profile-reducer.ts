import { profileAPI, ProfileType, ResultCodeEnum } from "../api/api"
import { Dispatch } from "redux"
import { ThunkAction } from 'redux-thunk'
import { AppReducerType } from "./redux-store"
import { updateObjectInArray } from "../utils/objects-helper/objects-helper"
import { stopSubmit } from "redux-form"

const ADD_POST = "profile/ADD-POST"
const UPDATE_POST = "profile/UPDATE_POST"

const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_PROFILE_DETAIL = "profile/SET_PROFILE_DETAIL"

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
        id: Math.random(),
        text: action.newPostText,
        userId: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case UPDATE_POST: {
      return {
        ...state,
        posts: updateObjectInArray(state.posts, action.idPost, "id", { text: action.newText }),
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
      let newPosts = state.posts.filter((el) => el.id !== action.idPost)
      return {
        ...state,
        posts: [...newPosts]
      }
    }
    default: return state
  }
}
type AddPostType = {
  type: typeof ADD_POST,
  newPostText: string
}
export const addPost = (newPostText: string): AddPostType => ({ type: ADD_POST, newPostText: newPostText })


type UpdatePostType = {
  type: typeof UPDATE_POST
  newText: string
  idPost: number
}
export const updatePost = (idPost: number, newText: string): UpdatePostType =>
  ({ type: UPDATE_POST, idPost, newText })

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
type ActionsType = UpdatePostType | AddPostType | DeletePostType | SetUserProfileType | SetStatusType
type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const setProfile = (profileId: number): ThunkType => async (dispatch: DispatchType) => {
  const data = await profileAPI.getProfile(profileId)
  dispatch(setUserProfile(data))

}
export const setProfilePhoto = (photo: FormData): ThunkType => async (dispatch: DispatchType) => {
  const data = await profileAPI.setProfilePhoto(photo)
  //обработка ошибок
}
export const setProfileDetail = (aboutMe: ProfileType): ThunkType => async (dispatch: any) => {
  const data = await profileAPI.setProfileDetail(aboutMe)
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(setProfile(aboutMe.userId))
  }
  else if (data.resultCode === ResultCodeEnum.Error) {
    // не правильное заполнено какое-то поле
    let errorText = data.messages.length > 0 ? data.messages[0] : "Some error"
    // console.log("errorText",errorText)
    dispatch(stopSubmit("contact", { _error: errorText }))
  }
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