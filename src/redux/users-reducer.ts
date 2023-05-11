import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { ResultCodeEnum, usersAPI } from "../api/api"
import { UsersType } from "../types/types"
import { updateObjectInArray } from "../utils/objects-helper/objects-helper"
import { AppReducerType } from "./redux-store"

const FOLLOW = "user/FOLLOW"
const UN_FOLLOW = 'user/UN_FOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_CURRENT_PORTION = 'user/SET_CURRENT_PORTION'
const SET_SEARCH = 'user/SET_SEARCH'

const SET_TOTAL_USERS_COUNT = 'user/SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'user/TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'user/TOOGLE_IS_FOLLOWING_PROGRESS'
export type PaginationType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  currentPortion: number
}
export type InitialState = {
  search:string
  users: Array<UsersType>
  pagination: PaginationType
  isFetching: boolean
  followingInProgress: Array<number>
  filter: {
    term: string
    friend: null | boolean
  }
}
let initialState: InitialState = {
  search:'',
  users: [],
  pagination: {
    pageSize: 15,
    totalUsersCount: 10,
    currentPage: 1,
    currentPortion: 0
  },
  isFetching: false,
  followingInProgress: [],
  filter: {
    term: '',
    friend: null
  }
}
const usersReducer = (state: InitialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }
    }
    case UN_FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      }
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.search
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.currentPage,
        }
      }
    }
    case SET_CURRENT_PORTION: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPortion: action.currentPortion,
        }
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalUsersCount: action.totalUsersCount,
        }
      }
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default: return state
  }
}
type FollowSuccessType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })
type setSearchType = {
  type: typeof SET_SEARCH
  search: string
}
export const setSearch = (search: string): setSearchType => ({ type: SET_SEARCH, search })

type UnFollowSuccessType = {
  type: typeof UN_FOLLOW
  userId: number
}
export const unFollowSuccess = (userId: number): UnFollowSuccessType => ({
  type: UN_FOLLOW, userId
})
// если переменная так и называется, то users: users писать не обязательно
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({
  type: SET_USERS, users
})

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE, currentPage
})
type SetCurrentPortionType = {
  type: typeof SET_CURRENT_PORTION
  currentPortion: number
}
export const setCurrentPortion = (currentPortion: number): SetCurrentPortionType => ({
  type: SET_CURRENT_PORTION, currentPortion
})
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT, totalUsersCount
})

type SetIsFetchingType = {
  type: typeof TOOGLE_IS_FETCHING
  isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({
  type: TOOGLE_IS_FETCHING, isFetching
})

type SetIsFollowingProgressType = {
  type: typeof TOOGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const setIsFollowingProgress = (isFetching: boolean, userId: number): SetIsFollowingProgressType => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})
type ActionsType = FollowSuccessType | UnFollowSuccessType | SetUsersType | SetCurrentPortionType |setSearchType
  | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | SetIsFetchingType | SetIsFollowingProgressType

type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number, term: string): ThunkType =>
  async (dispatch: DispatchType) => {
    dispatch(setIsFetching(true))
    const response = await usersAPI.getUsers(currentPage, pageSize, term)
    dispatch(setCurrentPage(currentPage))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setIsFetching(false))
  }

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(setIsFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.resultCode === ResultCodeEnum.Success)
    dispatch(actionCreator(userId))
  dispatch(setIsFollowingProgress(false, userId))
}


export const follow = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  let apiMethod = usersAPI.followUser.bind(usersAPI)
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

}
export const unFollow = (userId: number): ThunkType => async (dispatch: DispatchType) => {
  let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
  followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)
}

export default usersReducer