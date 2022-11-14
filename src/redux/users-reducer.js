import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/objects-helper/objects-helper"

const FOLLOW = "user/FOLLOW"
const UN_FOLLOW = 'user/UN_FOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'user/SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'user/TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'user/TOOGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
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
        // склеиваем два оператора
        users: [...action.users]
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        // склеиваем два оператора
        currentPage: action.currentPage,
        // users: [...state.users, ...action.users]
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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
export const followSuccess = (userId) => ({ type: FOLLOW, userId })

export const unFollowSuccess = (userId) => ({
  type: UN_FOLLOW, userId
})
// если переменная так и называется, то users: users писать не обязательно
export const setUsers = (users) => ({
  type: SET_USERS, users: users
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE, currentPage: currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount
})
export const setIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING, isFetching: isFetching
})
export const setIsFollowingProgress = (isFetching, userId) => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const response = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setCurrentPage(currentPage))
  dispatch(setUsers(response.items))
  dispatch(setTotalUsersCount(response.totalCount))
  dispatch(setIsFetching(false))

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setIsFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.resultCode === 0)
    dispatch(actionCreator(userId))
  dispatch(setIsFollowingProgress(false, userId))
}


export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.followUser.bind(usersAPI)
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

}
export const unFollow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
  followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)
}

export default usersReducer