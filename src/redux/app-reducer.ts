// import {authMe } from "./auth-reducer"
const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

export type InitialStateType = {
  initialized: boolean
}
let initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state: InitialStateType = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      }
    }

    default: return state
  }
}
type InitializedSuccessAT = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessAT => ({ type: INITIALIZED_SUCCESS })


export const initializeApp = () => async (dispatch: any) => {
  // let promise = dispatch(authMe())
  // если несоколько промисов, тогда all и массив
  // await Promise.all([promise])
  dispatch(initializedSuccess())
}

export default appReducer