import { AuthAPI, securityAPI } from "../api/api"
import { stopSubmit } from "redux-form"
const SET_USER_DATA = "auth/SET_USER_DATA"
const LOGIN = "auth/LOGIN"
const LOGOUT = "auth/LOGOUT"
const ISSHOWCAPTCHA = "auth/ISSHOWCAPTCHA"
const SETCAPTCHA = "auth/SETCAPTCHA"

const SETCAPTCHASTATUS = "auth/SETCAPTCHASTATUS"
const FINISHСHECKINGCAPCHA = "auth/FINISHСHECKINGCAPCHA"

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isShowCapcha: false,
  capchaUrl: '',
  isWaitingCapcha: false
}

const authReducer = (state = initialState, action) => {
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
    case FINISHСHECKINGCAPCHA: {
      return {
        ...state,
        isShowCapcha: false,
        capchaUrl: '',
        isWaitingCapcha: false
      }
    }
    default: return state
  }
}
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setAuthUserLogin = (email, password, rememberMe, captcha) => ({ type: SET_USER_DATA, data: { email, password, rememberMe, captcha } })
export const setAuthUserLogout = (userId, email, login) => ({ type: LOGOUT, data: { userId, email, login } })


export const showCapcha = (isShowCapcha) => ({ type: ISSHOWCAPTCHA, isShowCapcha })
export const setCapcha = (capchaUrl) => ({ type: SETCAPTCHA, capchaUrl })
export const setCapchaStatus = (isWaitingCapcha) => ({ type: SETCAPTCHASTATUS, isWaitingCapcha })
export const finishСheckingCapcha = () => ({ type: FINISHСHECKINGCAPCHA })

export const authMe = () => {
  return async (dispatch) => {
    const data = await AuthAPI.authMe()
    if (data.resultCode === 0) {
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
export const getCapchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaURL()
  dispatch(setCapcha(data.url))
  dispatch(setCapchaStatus(false))

}
export const logintMe = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await AuthAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(authMe())
    dispatch(setAuthUserLogin(email, password, rememberMe, captcha))
  }
  if (data.resultCode === 10) {
    //капча
    dispatch(showCapcha(true))
    dispatch(setCapchaStatus(true))
    dispatch(getCapchaUrl())
  }
  if (data.resultCode === 1) {
    // не правильное значение
    let errorText = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit("login", { _error: errorText }))
  }

}
export const logoutMe = () => async (dispatch) => {
  const data = await AuthAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserLogout(null, null, null))
  }

}
export default authReducer