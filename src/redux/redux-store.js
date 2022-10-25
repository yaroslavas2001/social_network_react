import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk   from "redux-thunk"
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: usersReducer,
  auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunk))


export default store