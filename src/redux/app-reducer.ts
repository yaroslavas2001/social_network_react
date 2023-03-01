// import {authMe } from "./auth-reducer"
const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"
const CHANGE_THEME = "app/CHANGE_THEME"

export type InitialStateType = {
  initialized: boolean
  isDarkTheme: boolean
}
let initialState: InitialStateType = {
  initialized: false,
  isDarkTheme: false
}

const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      }
    }
    case CHANGE_THEME: {
      return {
        ...state,
        isDarkTheme: action.theme
      }
    }
    default: return state
  }
}
type InitializedSuccessAT = {
  type: typeof INITIALIZED_SUCCESS
}
type ChangeThemeType = {
  type: typeof CHANGE_THEME
  theme: boolean
}
export const initializedSuccess = (): InitializedSuccessAT => ({ type: INITIALIZED_SUCCESS })
export const changeTheme = (theme: boolean): ChangeThemeType => ({ type: CHANGE_THEME, theme })


export const initializeApp = () => async (dispatch: any) => {
  // let promise = dispatch(authMe())
  // если несоколько промисов, тогда all и массив
  // await Promise.all([promise])
  dispatch(initializedSuccess())
}

export default appReducer