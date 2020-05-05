import { combineReducers,createStore,applyMiddleware } from "redux";
import profileReducer from "./profile-Reducer";
import dialogReducer from "./dialog-Reducer";
import sidebarReducer from "./sidebar-Reducer";
import usersReducer from "./users-Reducer";
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store