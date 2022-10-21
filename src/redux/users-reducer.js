const FOLLOW = "FOLLOW"
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 10,
  currentPage: 1,
  isFetching:false,
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return {
            ...u, followed: true
          }
          return u
        })
      }
    }
    case UN_FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return {
            ...u, followed: false
          }
          return u
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        // склеиваем два оператора
        users: [ ...action.users]
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
        totalUsersCount:action.totalUsersCount
      }
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching:action.isFetching
      }
    }
    default: return state
  }
}
export const follow = (userId) => ({ type: FOLLOW, userId })

export const unFollow = (userId) => ({
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
export const setIsFetching= (isFetching) => ({
  type: TOOGLE_IS_FETCHING, isFetching: isFetching
})
export default usersReducer