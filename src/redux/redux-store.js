import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk   from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: usersReducer,
  auth:authReducer,
  form:formReducer
})

let store = createStore(reducers,applyMiddleware(thunk))


export default store