import { authMe } from "./auth-reducer"
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


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


export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(authMe())
    // если несоколько промисов, тогда all и массив
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
    })
    // console.log("dispatchResult", promis)
  }
}

export default appReducer