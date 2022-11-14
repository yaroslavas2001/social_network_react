import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"
import appReduce from "./app-reducer"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: usersReducer,
  auth: authReducer,
  app: appReduce,
  form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// let store = createStore(reducers,applyMiddleware(thunk))


export default store