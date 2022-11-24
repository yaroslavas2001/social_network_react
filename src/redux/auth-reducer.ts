import { AuthAPI, ResultCodeEnum, securityAPI } from "../api/api"
import { stopSubmit } from "redux-form"
import {  Dispatch } from "redux"
import { ThunkAction } from 'redux-thunk'
import { AppReducerType } from "./redux-store"

const SET_USER_DATA = "auth/SET_USER_DATA"
const LOGIN = "auth/LOGIN"
const LOGOUT = "auth/LOGOUT"
const ISSHOWCAPTCHA = "auth/ISSHOWCAPTCHA"
const SETCAPTCHA = "auth/SETCAPTCHA"
const SETCAPTCHASTATUS = "auth/SETCAPTCHASTATUS"
// const FINISHСHECKINGCAPCHA = "auth/FINISHСHECKINGCAPCHA"
export type InitialStateType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  isShowCapcha: boolean,
  capchaUrl: string,
  isWaitingCapcha: boolean
  rememberMe: boolean
}
let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isShowCapcha: false,
  capchaUrl: '',
  isWaitingCapcha: false,
  rememberMe: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    case LOGIN: {
      return {
        ...state,
        ...action.data,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
        ...action.data,
      }
    }
    case SETCAPTCHA: {
      return {
        ...state,
        capchaUrl: action.capchaUrl,
      }
    }
    case SETCAPTCHASTATUS: {
      return {
        ...state,
        isWaitingCapcha: action.isWaitingCapcha,
      }
    }
    case ISSHOWCAPTCHA: {
      return {
        ...state,
        isShowCapcha: action.isShowCapcha,
      }
    }
    // case FINISHСHECKINGCAPCHA: {
    //   return {
    //     ...state,
    //     isShowCapcha: false,
    //     capchaUrl: '',
    //     isWaitingCapcha: false
    //   }
    // }
    default: return state
  }
}
type ActionsType = setAuthUserDataType | setAuthUserLoginType | setAuthUserLogoutType |
  showCapchaType | setCapchaType | setCapchaStatusType 

type setAuthUserDataPreloadType = {
  userId: number | null
  email: string | null
  login: string | null
}
type setAuthUserDataType = {
  type: typeof SET_USER_DATA
  data: setAuthUserDataPreloadType
}
export const setAuthUserData = (userId: number, email: string, login: string): setAuthUserDataType =>
  ({ type: SET_USER_DATA, data: { userId, email, login } })

type setAuthUserLoginPreloadType = {
  email: string | null
  password: string | null
  rememberMe: boolean
  capchaUrl: string
}
type setAuthUserLoginType = {
  type: typeof LOGIN
  data: setAuthUserLoginPreloadType
}
export const setAuthUserLogin = (email: string, password: string, rememberMe: boolean, capchaUrl: string): setAuthUserLoginType =>
  ({ type: LOGIN, data: { email, password, rememberMe, capchaUrl } })

type setAuthUserLogoutType = {
  type: typeof LOGOUT
  data: setAuthUserDataPreloadType
}
export const setAuthUserLogout = (userId: number | null, email: string, login: string): setAuthUserLogoutType => ({ type: LOGOUT, data: { userId, email, login } })

type showCapchaType = {
  type: typeof ISSHOWCAPTCHA
  isShowCapcha: boolean
}
export const showCapcha = (isShowCapcha: boolean): showCapchaType => ({ type: ISSHOWCAPTCHA, isShowCapcha })

type setCapchaType = {
  type: typeof SETCAPTCHA
  capchaUrl: string
}
export const setCapcha = (capchaUrl: string): setCapchaType => ({ type: SETCAPTCHA, capchaUrl })

type setCapchaStatusType = {
  type: typeof SETCAPTCHASTATUS
  isWaitingCapcha: boolean
}
export const setCapchaStatus = (isWaitingCapcha: boolean): setCapchaStatusType => ({ type: SETCAPTCHASTATUS, isWaitingCapcha })

// type finishСheckingCapchaType = {
//   type: typeof FINISHСHECKINGCAPCHA
// }
// export const finishСheckingCapcha = (): finishСheckingCapchaType => ({ type: FINISHСHECKINGCAPCHA })

type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const authMe = (): ThunkType => {
  return async (dispatch: DispatchType) => {
    const data = await AuthAPI.authMe()
    if (data.resultCode === ResultCodeEnum.Success) {
      let date = data.data
      dispatch(setAuthUserData(date.id, date.email, date.login))
    }
  }
}
// export const getCapchaUrl = () => {
//   return (dispatch) => {
//     securityAPI.getCaptchaURL().then(data => {
//       dispatch(setCapcha(data.url))
//       dispatch(setCapchaStatus(false))
//     })
//   }
// }
export const getCapchaUrl = (): ThunkType =>
  async (dispatch: DispatchType) => {
    const data = await securityAPI.getCaptchaURL()
    dispatch(setCapcha(data.url))
    dispatch(setCapchaStatus(false))
  }

export const logintMe = (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch:any) => {
    const data = await AuthAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(authMe())
      dispatch(setAuthUserLogin(email, password, rememberMe, captcha))
    }
    if (data.resultCode === ResultCodeEnum.Capcha) {
      //капча
      // console.log("nen")
      dispatch(showCapcha(true))
      dispatch(setCapchaStatus(true))
      dispatch(getCapchaUrl())
    }
    if (data.resultCode === ResultCodeEnum.Error) {
      // не правильное значение
      let errorText = data.messages.length > 0 ? data.messages[0] : "Some error"
      dispatch(stopSubmit("login", { _error: errorText })) 
    }

  }
export const logoutMe = (): ThunkType =>
  async (dispatch: DispatchType) => {
    const data = await AuthAPI.logout()
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(setAuthUserLogout(null, '', ''))
    }

  }
export default authReducer