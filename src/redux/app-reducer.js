import { authMe } from "./auth-reducer"
const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"


let initialState = {
  initialized: false,

}

const appReducer = (state = initialState, action) => {
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
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })


export const initializeApp = () => async (dispatch) => {
  let promise = dispatch(authMe())
  // если несоколько промисов, тогда all и массив
  await Promise.all([promise])
  dispatch(initializedSuccess())
  // console.log("dispatchResult", promis)
}

export default appReducer